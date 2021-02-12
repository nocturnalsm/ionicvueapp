<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>CHANGE PASSWORD</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="justify-content-items-center">
            <div class="circle">
              <ion-icon :icon="lockClosed"></ion-icon>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-start">
          <ion-col size="12">
            <ion-input name="password" type="password" placeholder="Old Password" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input name="password" type="password" placeholder="New Password" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
            <ion-input name="c_password" type="password" placeholder="Confirm New Password" @ionChange="handleChange"></ion-input>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button>CANCEL</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" @click="savePassword()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              {{ !isLoading ? "SAVE" : "" }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonGrid, IonRow, IonCol, IonButtons,
  IonSpinner, IonToast
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { lockClosed, chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'ChangePassword',
  components: {
    IonToolbar,
    IonInput,
    IonPage,
    IonButton, IonBackButton,
    IonIcon,
    IonGrid, IonRow, IonCol, IonButtons,
    IonSpinner, IonToast
  },

  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();

    const login = () => {
      router.push({name : "login" });
    };
    const savePassword = () => {
      router.push({name : "resetsuccess" });
    };
    const handleChange = (e: CustomEvent) => {
      console.log(e);
      const name: string = (e?.target as any)?.name;
    };

  return {
      ...state,
      login,
      savePassword,
      handleChange,
      lockClosed, chevronBackOutline
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
    ion-footer ion-button {
      width: 10rem;
    }
</style>
