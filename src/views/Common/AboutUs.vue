<template>
  <ion-page transition="false">
    <ion-toolbar>
      <ion-buttons slot="start"><ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button></ion-buttons>
      <ion-title>ABOUT US </ion-title>
    </ion-toolbar>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-img src="/assets/icon/logo.svg"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.</p>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage, IonBackButton,
  IonButtons,
  IonGrid, IonRow, IonCol, IonImg,
} from "@ionic/vue";

import { chevronBackOutline } from 'ionicons/icons';

export default {
  components: {
    IonToolbar,
    IonPage,
    IonButtons,
    IonGrid, IonRow, IonCol, IonImg, IonBackButton
  },
  name: 'AboutUs',
  setup(){
    return { chevronBackOutline };
  }
};
</script>
<style scoped>
  ion-img {
    width: 10rem;
    height: auto;
    margin: 0 auto;
  }
  ion-col p {
    font-size: 1.1rem;
    text-align: left;
    color: #D3D4D5;
    padding: 0 1.5rem 0 1.5rem;
  }
</style>
