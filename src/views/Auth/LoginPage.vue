<template>
  <ion-page transition="false">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button :icon="chevronBackOutline"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="ion-text-center">
          <ion-img src="/assets/icon/logo.svg"></ion-img>
        </ion-col>
        <ion-col size="12" class="ion-text-center">
          <ion-text id="title" color="white">LOGIN</ion-text>
        </ion-col>
      </ion-row>
      <ion-row id="login-form" class="ion-align-items-start">
        <ion-col size="12">
          <ion-input ref="emailinput" name="username" type="text" placeholder="Email Address" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="12">
          <PasswordInput ref="passwordinput" :name="password" :placeholder="Password" value="" @changed="handleChange" />
        </ion-col>
        <ion-col size="12">
          <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" expand="block" @click="doLogin()">
            <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
            {{ !isLoading ? "LOGIN" : "" }}
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-row class="ion-align-items-stretch">
        <ion-col size="12" class="ion-align-self-center">
          <a @click="forgot()">FORGOT PASSWORD ?</a>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-footer class="ion-no-border">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button class="ion-text-capitalize" :disabled="isLoading" expand="block" @click="doGoogleLogin()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              Login With&nbsp;&nbsp;<ion-icon src="/assets/icon/google.svg"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button class="ion-text-capitalize" :disabled="isLoading" expand="block" @click="fbLogin()">
              Login with&nbsp;&nbsp;<ion-icon src="/assets/icon/facebook.svg"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-toolbar>
        <div>Don't have an account ? <a @click="register()">REGISTER</a></div>
      </ion-toolbar>
    </ion-footer>
    <ion-toast></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import PasswordInput from '@/components/PasswordInput.vue';
import { defineComponent, ref } from "vue";

import {
  IonToolbar,
  alertController,
  IonInput,
  IonPage,
  IonButton, IonBackButton,
  IonIcon,
  IonGrid, IonRow, IonCol, IonImg, IonFooter, IonText, IonButtons,
  IonSpinner, IonToast,
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { chevronBackOutline, eye, eyeOff } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonToolbar,
    IonInput,
    IonPage,
    IonButton,
    IonIcon, IonBackButton,
    IonGrid, IonRow, IonCol, IonImg, IonFooter, IonText, IonButtons,
    IonSpinner, IonToast, PasswordInput
  },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const emailinput = ref();
    const passwordinput = ref();
    const credentials = ref<{ [key: string]: string }>({
      username: "",
      password: "",
    });
    const register = () => {
      router.push({name : "register" });
    };
    const forgot = () => {
      router.push({name : "forgot" });
    };
    const handleChange = (e: CustomEvent) => {
      const name: string = (e?.target as any)?.name;
      credentials.value[name as string] = e.detail.value;
    };

    /**
     *
     */
    const handleAlert = (message: string, isError = false) => {
      alertController
        .create({
          header: isError ? "Error Message" : "Notice",
          message: message,
          buttons: ["OK"],
        })
        .then((t) => t.present());
    };

    /**
     *
     *
     */
    const doLogin = async () => {
      try {
        const { username, password } = credentials.value;
        await state.login(username, password);
        emailinput.value.$el.value = "";
        router.push({name : "home" });
      } catch (error) {
        handleAlert(error.message, true);
      }
    };
    const doGoogleLogin = () => {
        state.googleLogin();
    };
    return {
      ...state,
      credentials,
      doLogin,
      doGoogleLogin,
      forgot,
      register,
      handleChange, emailinput, passwordinput,
      chevronBackOutline, eye, eyeOff
    };
  },
});
</script>

<style scoped>
    ion-item {
      --padding-start: 0px;
    }
    ion-grid ion-img {
      margin-bottom: 1rem;
      margin-top: 1rem;
      height: 8.5rem !important;
      width: auto !important;
      align-items: center;
    }

    #login-form ion-col {
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      margin: 0;
    }
    #title {
      font-size: 1.2rem;
      font-weight: bolder;
      color: var(--ion-text-color);
    }
    ion-footer {
      box-shadow: none;
    }
</style>
