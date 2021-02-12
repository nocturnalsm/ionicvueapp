<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>FRIENDS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <h2>Darlene Robertson</h2>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <h2>Jerome Bell</h2>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <h2>Devon Layne</h2>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <h2>Floyd Miles</h2>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <h2>Wade Warren</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { IonPage, IonHeader, IonContent, IonItem,
         IonToolbar, IonAvatar, IonButtons, IonTitle,
         IonLabel, IonList, IonBackButton } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  name: 'FriendsList',
  components: {  IonHeader, IonContent, IonPage, IonTitle,
                 IonToolbar, IonAvatar, IonButtons,
                 IonItem, IonLabel, IonList, IonBackButton },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    return {
      ...state,
      chevronBackOutline
    };
  }
})
</script>
<style scoped>
  ion-list {
    background: transparent;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ion-label h2 {
    font-size: 1rem;
  }
  ion-list ion-item {
    cursor: pointer;
    --padding-start: 0.5rem;
    --padding-end: 0.5rem;
  }
  ion-item {
    border-bottom: 1px inset rgba(255,255,255,0.1);
  }
</style>
