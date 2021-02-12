<template>
  <ion-page>
    <ion-toolbar>
    </ion-toolbar>
    <ion-grid>
      <ion-row>
        <ion-col size="12" class="justify-content-items-center">
          <div class="circle">
            <ion-icon :icon="checkmarkCircle"></ion-icon>
          </div>
        </ion-col>
        <ion-col size="12" class="ion-text-center">
          <ion-text id="title" color="white">SUCCESS</ion-text>
        </ion-col>
      </ion-row>
      <ion-row class="ion-align-items-start">
        <ion-col size="12">
          <ion-label>You have successfully reset your password, use the link below to login</ion-label>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-footer>
      <ion-button :disabled="isLoading" color="gradientblue" expand="block" @click="login()">
        LOGIN
      </ion-button>
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
  IonPage,
  IonButton,
  IonIcon,
  IonGrid, IonRow, IonCol, IonText
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { checkmarkCircle } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonToolbar,
    IonPage,
    IonButton,
    IonIcon,
    IonGrid, IonRow, IonCol, IonText
  },

  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();

    const login = () => {
      router.push({name : "login" });
    };

  return {
      ...state,
      login,
      checkmarkCircle
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
    #title {
      font-size: 1.2rem;
      font-weight: bolder;
      color: var(--ion-text-color);
    }
    ion-footer {
      box-shadow: none;
    }
</style>
