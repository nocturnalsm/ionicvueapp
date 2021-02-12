<template>
  <ion-page transition="false">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button></ion-buttons>
        <ion-title>PRICING</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card class="ion-text-capitalize">
          <ion-card-content>
            <ion-item color="transparent" lines ="none">
              <ion-label class="price-name" slot="start">FREE</ion-label>
              <ion-label class="price ion-text-end" slot="end">$0</ion-label>
            </ion-item>
            <ul>
              <li>3 issues only</li>
              <li>Watch only battles</li>
            </ul>
          </ion-card-content>
        </ion-card>
        <ion-card class="ion-text-capitalize">
          <ion-card-content>
            <ion-item color="transparent" lines ="none">
              <ion-label class="price-name" slot="start">DEPUTY</ion-label>
              <ion-label class="price ion-text-end" slot="end">$2.99 / mo</ion-label>
            </ion-item>
            <ul>
              <li>15 issues</li>
              <li>Create 4 battles</li>
            </ul>
            <ion-item color="transparent" lines="none">
                <ion-label class="action ion-text-end" slot="end">
                  <a>PURCHASE</a>
                </ion-label>
            </ion-item>
          </ion-card-content>
        </ion-card>
        <ion-card class="ion-text-capitalize">
          <ion-card-content>
            <ion-item color="transparent" lines ="none">
              <ion-label class="price-name" slot="start">JURY</ion-label>
              <ion-label class="price ion-text-end" slot="end">$7.99 / mo</ion-label>
            </ion-item>
            <ul>
              <li>Unlimited Issues</li>
              <li>Create 20 battles</li>
            </ul>
            <ion-item color="transparent" lines="none">
                <ion-label class="action ion-text-end" slot="end">
                  <a>PURCHASE</a>
                </ion-label>
            </ion-item>
          </ion-card-content>
        </ion-card>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-label>
              <a>TERMS</a>
            </ion-label>
          </ion-col>
          <ion-col size="6">
            <ion-label>
              <a>PRIVACY POLICY</a>
            </ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">

import {
  IonToolbar,
  IonPage, IonHeader, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem, IonFooter, IonLabel,
  IonGrid, IonRow, IonCol,
  IonButtons, IonBackButton
} from "@ionic/vue";

import { defineComponent, ref } from "vue";

import { happyOutline, lockClosedOutline, personCircleOutline, notifications, chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  components: {
    IonToolbar,
    IonPage, IonHeader, IonTitle, IonContent,
    IonCard, IonCardContent, IonItem, IonFooter, IonLabel,
    IonGrid, IonRow, IonCol,
    IonButtons, IonBackButton
  },
  name: 'Pricing',
  setup() {
    return { happyOutline, lockClosedOutline, personCircleOutline, notifications, chevronBackOutline };
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
  ion-card ul {
    font-size: 0.8rem;
    text-align: left;
  }
  .price-name, .price {
    font-weight: bolder;
    white-space: nowrap !important;
    text-overflow: visible  !important;
  }
  ion-icon {
    display: block !important;
    margin: 1rem auto;
    margin-bottom: 1rem;
    font-size: 3rem !important;
  }
</style>
