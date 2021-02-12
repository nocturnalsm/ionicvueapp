<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <TopToolbar title="MESSAGES" />
    </ion-header>
    <ion-content>
      <ion-list @click="showMessage()">
        <ion-item color="transparent" lines="none">
          <ion-avatar slot="start"></ion-avatar>
          <ion-label slot="start">
            <h2>Darlene Robertson</h2>
            <p>Amet minim mollit non deserunt...</p>
          </ion-label>
          <ion-label>
            <div class="time">22:12</div>
            <ion-badge class="amount" color="gradientblue" slot="end">1</ion-badge>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar slot="start"></ion-avatar>
          <ion-label slot="start">
            <h2>Darlene Robertson</h2>
            <p>Amet minim mollit non deserunt...</p>
          </ion-label>
          <ion-label>
            <ion-badge class="amount" color="gradientblue" slot="end">1</ion-badge>
          </ion-label>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-avatar slot="start"></ion-avatar>
          <ion-label slot="start">
            <h2>Darlene Robertson</h2>
            <p>Amet minim mollit non deserunt...</p>
          </ion-label>
          <ion-label>
            <ion-badge class="amount" color="gradientblue" slot="end">1</ion-badge>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { IonPage, IonHeader, IonContent, IonItem, IonBadge, IonLabel, IonList,
         IonAvatar } from '@ionic/vue';
import TopToolbar from '@/components/TopToolbar.vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent ({
  name: 'MessageList',
  components: {  TopToolbar, IonHeader, IonContent, IonPage,
                 IonAvatar, IonItem, IonBadge, IonLabel, IonList },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const showMessage = () => {
      router.push({name : "messageshow" });
    };
    return {
      ...state,
      showMessage
    };
  }
})
</script>
<style scoped>
  ion-badge {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
  ion-label h2 {
    font-size: 1rem;
  }
  ion-label p {
    font-size: 0.8rem;
  }
  ion-list ion-item {
    cursor: pointer;
  }
  ion-item {
    border-bottom: 1px inset rgba(var(--ion-text-color-rgb), 0.2);
  }
  ion-list {
    background: transparent;
  }
  .time {
    font-size: 0.8rem;
  }
</style>
