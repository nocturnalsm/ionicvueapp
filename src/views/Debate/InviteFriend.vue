<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/tabs/home" :icon="closeOutline"></ion-back-button>
      </ion-buttons>
      <ion-title>INVITE FRIENDS</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-searchbar></ion-searchbar>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <Friend toggle-button=true friend-name="Darlene Robertson"/>
        </ion-col>
        <ion-col size="6">
          <Friend toggle-button=true friend-name="Darrel Steward"/>
        </ion-col>
        <ion-col size="6">
          <Friend toggle-button=true friend-name="Marvin McKinney"/>
        </ion-col>
        <ion-col size="6">
          <Friend toggle-button=true friend-name="Jenny Wilson"/>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
  <ion-footer>
    <ion-grid>
      <ion-row>
        <ion-col size="6">
          <ion-button fill="clear">CANCEL</ion-button>
        </ion-col>
        <ion-col size="6">
          <ion-button color="gradientblue" expand="block">INVITE</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-footer>
</ion-page>
</template>
<script>
import { IonGrid, IonRow, IonCol, IonSearchbar, IonHeader, IonToolbar, IonContent, IonTitle,
         IonButtons, IonBackButton, IonFooter, IonButton, IonPage } from '@ionic/vue';
import { search, closeOutline } from 'ionicons/icons';
import Friend from '@/components/Friend.vue';

export default {
  name: 'InviteFriend',
  components: { IonGrid, IonRow, IonCol, IonSearchbar, IonContent, IonTitle,
                IonHeader, IonToolbar, IonButtons, IonBackButton, IonFooter, IonButton,
                Friend, IonPage },
  setup() {
    return {
      search, closeOutline
    }
  },
}
</script>
<style scoped>
  ion-searchbar {
    border-radius: 1rem;
    box-shadow: 8px 8px 30px rgba(202, 212, 226, 0.08), -8px -8px 15px rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
    height: 3.5rem;
    text-align: left;
  }
  ion-searchbar searchbar-input-container {
    --background: transparent;
    box-shadow: none;
  }
</style>
