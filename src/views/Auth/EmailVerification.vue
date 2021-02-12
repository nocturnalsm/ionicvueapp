<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button :icon="chevronBackOutline"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="justify-content-items-center">
          <div class="circle">
            <ion-icon :icon="eyeOutline"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="12" class="ion-text-center">
          <ion-text id="title" color="white">EMAIL VERIFICATION</ion-text>
        </ion-col>
      </ion-row>
      <ion-row id="login-form" class="ion-align-items-start">
        <ion-col size="12">
          <ion-label>Please enter the 6 digit code we sent to your email</ion-label>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="2">
          <ion-input inputmode="numeric" max="9" min="0" name="code" class="code" type="number" placeholder="__" @ionChange="handleChange"></ion-input>
        </ion-col>
        <ion-col size="12">
          <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" expand="block" @click="verify()">
            <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
            {{ !isLoading ? "SUBMIT" : "" }}
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div>Remembered your password ? <a @click="login()">LOGIN</a></div>
      </ion-toolbar>
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
  IonGrid, IonRow, IonCol, IonFooter, IonText, IonButtons,
  IonSpinner, IonToast
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { eyeOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonToolbar,
    IonInput,
    IonPage,
    IonButton, IonBackButton,
    IonIcon,
    IonGrid, IonRow, IonCol, IonFooter, IonText, IonButtons,
    IonSpinner, IonToast
  },

  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();

    const login = () => {
      router.push({name : "login" });
    };
    const verify = () => {
      router.push({name : "resetpassword" });
    };

    const handleChange = (e: CustomEvent) => {
      console.log(e);
      const name: string = (e?.target as any)?.name;
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
      login,
      verify,
      handleChange,
      eyeOutline
    };
  },
});
</script>

<style scoped>
    ion-item {
      --padding-start: 0px;
    }
    .code {
        font-size: 2rem;
        text-align: center;
    }
    ion-grid ion-img {
      margin-bottom: 1rem;
      margin-top: 1rem;
      height: 8.5rem !important;
      width: auto !important;
      align-items: center;
    }
    .circle {
      border-radius: 50%;
      margin: 0 auto;
      width: 8.2rem;
      height: 8.2rem;
      background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
      box-shadow: -0.5px 0.5px 0px rgba(202, 212, 226, 0.05), 0.5px -0.5px 0px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(202, 212, 226, 0.1), 10px 10px 30px rgba(0, 0, 0, 0.4);
    }
    .circle ion-icon {
      margin-top: 25%;
      font-size: 4.2rem;
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
