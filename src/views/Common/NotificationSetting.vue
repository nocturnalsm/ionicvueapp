<template>
<ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home" />
        </ion-buttons>
        <ion-title slot="start">NOTIFICATION</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-list>
          <ion-item color="transparent" lines="none">
            <ion-label>ENABLE NOTIFICATIONS</ion-label>
            <ion-toggle value="enable-notification">
            </ion-toggle>
          </ion-item>
          <ion-item color="transparent" lines="none">
            <ion-label>IN APP NOTIFICATIONS</ion-label>
            <ion-toggle value="inapp-notification">
            </ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonBackButton,
         IonButtons, IonList, IonToggle } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';
import { defineComponent, ref } from "vue";

export default defineComponent ({
  name: 'NotificationSetting',
  components: {  IonToolbar, IonContent, IonButtons, IonHeader, IonPage, IonList, IonToggle, IonBackButton },
  setup() {

    return {
      chevronBackOutline
    };
  }
});
</script>
<style scoped>
  ion-list {
    background: transparent;
  }
  ion-item {
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
</style>
