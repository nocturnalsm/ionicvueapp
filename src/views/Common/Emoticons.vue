<template>
<ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home" />
        </ion-buttons>
        <ion-title slot="start">EMOTICONS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card class="notification">
          <ion-card-header>
            <h2>:)</h2>
            <span>Punctuation Marks</span>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            <ion-label><a>CHANGE IMAGE</a></ion-label>
          </ion-card-content>
        </ion-card>
        <ion-card class="notification">
          <ion-card-header>
            <h2>:0</h2>
            <span>Punctuation Marks</span>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            <ion-label><a>CHANGE IMAGE</a></ion-label>
          </ion-card-content>
        </ion-card>
        <ion-card class="notification">
          <ion-card-header>
            <h2>:|</h2>
            <span>Punctuation Marks</span>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            <ion-label><a>CHANGE IMAGE</a></ion-label>
          </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonBackButton,
         IonButtons, IonCard } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import { defineComponent, ref } from "vue";

export default defineComponent ({
  name: 'Emoticons',
  components: {  IonToolbar, IonContent, IonButtons, IonHeader, IonPage, IonCard, IonBackButton },
  setup() {

    return {
      chevronBackOutline
    };
  }
});
</script>
<style scoped>
  ion-card {
    background: #1D1E22;
    border-radius: 14px;
    text-align: left;
  }
  ion-card-content {
    padding: 0.8rem;
  }
  ion-card h2 {
    font-size: 1rem;
    color: var(--ion-text-color);
  }
</style>
