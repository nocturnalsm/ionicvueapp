<template>
<ion-grid>
  <ion-row>
    <ion-col class="ion-text-start" size="6">
      Invite Friends
    </ion-col>
  </ion-row>
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
</template>
<script>
import { IonGrid, IonRow, IonCol, IonSearchbar } from '@ionic/vue';
import { search } from 'ionicons/icons';
import Friend from '@/components/Friend.vue';

export default {
  name: 'BattleInviteFriend',
  components: { IonGrid, IonRow, IonCol, IonSearchbar, Friend },
  setup() {
    return {
      search
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
