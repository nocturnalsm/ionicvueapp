<template>
  <ion-page transition="false">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button></ion-buttons>
        <ion-title>REPORT A PROBLEM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item color="transparent" lines="none">
        <ion-label position="stacked">What is the matter ?</ion-label>
        <ion-textarea placeholder="Report a problem here" rows="8" required="true" />
      </ion-item>
    </ion-content>
    <ion-footer>
        <ion-button color="gradientblue" expand="block">REPORT</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage, IonTextarea,
  IonButtons, IonBackButton
} from "@ionic/vue";

import { defineComponent, ref } from "vue";

import { chevronBackOutline } from 'ionicons/icons';
export default defineComponent ({
  components: {
    IonToolbar,
    IonPage, IonTextarea,
    IonButtons, IonBackButton
  },
  name: 'ReportProblem',
  setup(){
    return { chevronBackOutline };
  }
});
</script>
<style scoped>
  ion-item ion-label {
    font-size: 1.2rem !important;
    color: var(--ion-text-color) !important;
    opacity: 0.6;
    margin-bottom: 1rem !important;
  }
  ion-footer ion-button {
    border-radius: 1rem;
  }
  ion-item.item-has-focus ion-label {
    opacity: 1;
  }
</style>
