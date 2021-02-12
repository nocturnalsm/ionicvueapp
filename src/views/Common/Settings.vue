<template>
  <ion-page transition="false">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button></ion-buttons>
        <ion-title>SETTINGS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size="6" class="ion-wrap">
              <ion-card @click="openMenu('emoticons')" class="ion-text-capitalize">
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="happyOutline"></ion-icon>
                  <ion-label>Emoticons</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6">
              <ion-card @click="openMenu('notification-setting')" class="ion-text-capitalize">
                <ion-card-content class="ion-justify-content-center">
                  <ion-icon :icon="notifications"></ion-icon>
                  <ion-label>Notifications</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6">
              <ion-card @click="openMenu('profile-setting')" class="ion-text-capitalize">
                <ion-card-content class="ion-justify-content-center">
                  <ion-icon :icon="personCircleOutline"></ion-icon>
                  <ion-label>Profile</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col size="6">
              <ion-card @click="openMenu('change-password')" class="ion-text-capitalize">
                <ion-card-content class="ion-justify-content-center">
                  <ion-icon :icon="lockClosedOutline"></ion-icon>
                  <ion-label>Password</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage,
  IonButtons,IonBackButton
} from "@ionic/vue";
import { useRouter } from 'vue-router';
import { defineComponent, ref } from "vue";

import { happyOutline, lockClosedOutline, personCircleOutline, notifications, chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  components: {
    IonToolbar,
    IonPage, IonBackButton,
    IonButtons
  },
  name: 'Settings',
  setup() {
    const router = useRouter();
    const openMenu = (route: string) => {
      router.push({name: route});
    };
    return { happyOutline, lockClosedOutline, personCircleOutline, notifications, chevronBackOutline, openMenu  };
  }
});
</script>
<style scoped>
  ion-img {
    width: 10rem;
    height: auto;
    margin: 0 auto;
  }
  ion-card {
    border-radius: 1rem;
    height: 10rem;
    cursor: pointer;
    margin-inline: 0px;
  }
  ion-list {
    background: transparent;
  }
  ion-button {
    color: rgba(255,255,255,0.6) !important;
    font-size: 1.1rem;
    width: 90%;
    height: 10rem;
  }
  ion-label {
    margin-top: 1rem;
  }
  ion-icon {
    display: block !important;
    margin: 1rem auto;
    margin-bottom: 1rem;
    font-size: 3rem !important;
  }
</style>
