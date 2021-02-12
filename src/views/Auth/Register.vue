<template>
  <ion-page transition="false">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/login" :icon="chevronBackOutline"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="ion-text-center">
          <ion-img src="/assets/icon/logo.svg"></ion-img>
        </ion-col>
        <ion-col size="12" class="ion-text-center">
          <ion-text id="title" color="white">REGISTER</ion-text>
        </ion-col>
      </ion-row>
      <ion-row id="login-form" class="ion-align-items-start">
        <ion-col size="12">
          <ion-input name="email" type="email" placeholder="Email Address" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="12">
          <ion-input name="username" type="text" placeholder="Username" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="12">
          <ion-input name="password" type="password" placeholder="Password" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="12">
          <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" expand="block" @click="doRegister()">
            <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
            {{ !isLoading ? "REGISTER" : "" }}
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-footer class="ion-no-border">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button class="ion-text-capitalize" :disabled="isLoading" expand="block" @click="doRegister()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              Register &nbsp;<ion-icon src="/assets/icon/google.svg"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button class="ion-text-capitalize" :disabled="isLoading" expand="block" @click="doRegister()">
              Register &nbsp;<ion-icon src="/assets/icon/facebook.svg"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div>Already have an account ? <a @click="login()">LOGIN</a></div>
    </ion-footer>
    <ion-toast></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { defineComponent, ref } from "vue";

import {
  IonToolbar,
  alertController,
  IonInput,
  IonPage,
  IonButton, IonBackButton,
  IonIcon,
  IonGrid, IonRow, IonCol, IonImg, IonFooter, IonText, IonButtons,
  IonSpinner, IonToast
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonToolbar,
    IonInput,
    IonPage,
    IonButton, IonBackButton,
    IonIcon,
    IonGrid, IonRow, IonCol, IonImg, IonFooter, IonText, IonButtons,
    IonSpinner, IonToast
  },

  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const credentials = ref<{ [key: string]: string }>({
      username: "",
      password: "",
    });
    const login = () => {
      router.push({name : "login" });
    };
    const handleChange = (e: CustomEvent) => {
      console.log(e);
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
  return {
      ...state,
      credentials,
      login,
      handleChange,
      chevronBackOutline
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
