<template>
  <ion-page transition="false">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>RECORDS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card>
          <ion-card-header>Stats</ion-card-header>
          <ion-card-content>
          </ion-card-content>
        </ion-card>
        <Stats :showcredibility="false" :honored="90" :win="20" :lost="30" :totalcase="20" :showdislike="true" :likes="96122" dislikes="200"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage,
  IonButtons, IonBackButton
} from "@ionic/vue";

import { defineComponent } from "vue";
import Stats from '@/components/Stats.vue';
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  components: {
    IonToolbar,
    IonPage,
    IonButtons, Stats, IonBackButton
  },
  name: 'Records',
  setup(){
    return { chevronBackOutline };
  }
});
</script>
<style scoped>
  ion-card {
    border-radius: 1rem;
    cursor: pointer;
  }
  icon-card ion-label {
    font-size: 1.1rem;
    font-weight: bolder;
  }
</style>
