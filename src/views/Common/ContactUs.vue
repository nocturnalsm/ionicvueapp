<template>
  <ion-page transition="false">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/tabs/home" :icon="chevronBackOutline"></ion-back-button>
      </ion-buttons>
      <ion-title>CONTACT US</ion-title>
    </ion-toolbar>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-list>
             <ion-item lines="none" color="transparent">
               <ion-icon slot="start" :icon="globeOutline"></ion-icon>
               <ion-label>WWW.JURYOFPEERS.COM</ion-label>
             </ion-item>
          </ion-list>
          <ion-list>
             <ion-item lines="none" color="transparent">
               <ion-icon slot="start" :icon="callOutline"></ion-icon>
               <ion-label>+1 234 567 890</ion-label>
             </ion-item>
          </ion-list>
          <ion-list>
             <ion-item lines="none" color="transparent">
               <ion-icon slot="start" :icon="mailOpenOutline"></ion-icon>
               <ion-label>jury@ofpeers.com</ion-label>
             </ion-item>
          </ion-list>
          <ion-list>
             <ion-item lines="none" color="transparent">
               <ion-icon slot="start" :icon="locationOutline"></ion-icon>
               <ion-label>719 Illinois Court<br>Starkville, MS 39759</ion-label>
             </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage, IonIcon, IonLabel, IonList, IonTitle,
  IonButtons, IonBackButton, IonContent, IonCard, IonCardContent, IonItem
} from "@ionic/vue";

import { defineComponent, ref } from "vue";
import { globeOutline, callOutline, mailOpenOutline, locationOutline, chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  components: {
    IonToolbar,
    IonPage, IonTitle,
    IonButtons, IonItem, IonIcon, IonLabel, IonBackButton,
    IonContent, IonCard, IonCardContent, IonList
  },
  name: 'ContactUs',
  setup() {
    return { globeOutline, callOutline, mailOpenOutline, locationOutline, chevronBackOutline };
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
  }
  ion-list {
    background: transparent;
  }
  ion-item {
    color: rgba(255,255,255,0.6) !important;
  }
  ion-label {
    font-size: 0.9rem !important;
  }
</style>
