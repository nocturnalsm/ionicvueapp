<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button @click="openMenu()">
        <ion-icon :icon="gridOutline"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>{{ title }}</ion-title>
    <ion-buttons slot="end">
      <ion-button @click="openEvidence()">
        <ion-icon :icon="fingerPrintOutline"></ion-icon>
      </ion-button>
      <ion-button @click="openNotification()">
        <ion-icon :icon="notificationsOutline"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>
<script lang="ts">

import useFirebaseAuth from "../hooks/firebase-auth";
import { IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, menuController  } from '@ionic/vue';
import { fingerPrintOutline, notificationsOutline,  gridOutline } from 'ionicons/icons';
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'TopToolbar',
  components: { IonToolbar, IonButtons, IonIcon, IonButton, IonTitle },
  props: ['title'],
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const openNotification = () => {
      router.push({name : "notifications" });
    };
    const openEvidence = () => {
      router.push({name : "evidence" });
    };
    const openMenu = () => {
      menuController.open();
    }
    return {
      ...state, fingerPrintOutline, notificationsOutline, gridOutline, openNotification, openEvidence, openMenu
    }
  }
});
</script>
