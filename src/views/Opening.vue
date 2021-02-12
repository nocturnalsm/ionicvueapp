<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-img src="/assets/icon/logo.svg"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-button expand="block" color="gradientblue" href="/login">GET STARTED</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">

import {
  IonPage,
  IonButton,
  IonGrid, IonRow, IonCol, IonImg, IonFooter
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonButton,
    IonGrid, IonRow, IonCol, IonImg, IonFooter
  },
  name: "Opening"
};
</script>
