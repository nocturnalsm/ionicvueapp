<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home" :icon="chevronBackOutline"></ion-back-button>
        </ion-buttons>
        <ion-title>Darlene Robertson</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row class="ion-align-items-start ion-text-start">
          <ion-col size="11">
            <ion-card>
              <ion-card-content>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <div class="ion-text-right">
                  <ion-label class="ion-text-end"><small>12:21 PM</small></ion-label>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-start ion-text-start">
          <ion-col size="11" offset="1">
            <ion-card>
              <ion-card-content>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <div class="ion-text-right">
                  <ion-label class="ion-text-end"><small>12:21 PM</small></ion-label>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="10">
            <ion-item class="ion-text-start">
              <ion-icon :icon="attachOutline"></ion-icon>
              <ion-input type="text" name="message" placeholder= "Write A Message"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="2">
            <ion-button color="gradientblue">
              <ion-icon :icon="sendOutline"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonCard, IonLabel,
         IonInput, IonItem, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonFooter,
         IonCardContent, IonTitle, IonBackButton } from '@ionic/vue';
import { defineComponent } from "vue";
import { attachOutline, sendOutline, chevronBackOutline } from 'ionicons/icons';


export default defineComponent ({
  name: 'MessageShow',
  components: {  IonToolbar, IonButtons, IonHeader, IonContent, IonPage, IonCard, IonLabel,
                 IonInput, IonItem, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonFooter,
                 IonCardContent, IonTitle, IonBackButton },
  setup() {
    const state = useFirebaseAuth();
    return {
      ...state,
      attachOutline,
      sendOutline, chevronBackOutline
    };
  }
});
</script>
<style scoped>
  ion-row:first-child ion-card {
    background: #1D1E22;
    border-radius: 0px 14px 14px 14px;
  }
  ion-row:last-child ion-card {
    background: linear-gradient(100.15deg, #3C5E71 0.63%, #274A5E 101.02%);
    border-radius: 14px 0px 14px 14px;
  }
  ion-card p {
    font-size: 0.8rem;
  }
  ion-input {
    background-color: transparent !important;
    box-shadow: none;
    font-size: 0.8rem;
  }
  ion-footer ion-item {
    border-radius: 1rem;
  }
</style>
