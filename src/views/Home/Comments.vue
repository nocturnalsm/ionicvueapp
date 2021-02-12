<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>COMMENTS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list color="transparent">
        <ion-item class="comments" color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <span>Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
        <ion-item class="comments" color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <span>Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
        <ion-item class="comments" color="transparent" lines="none">
          <ion-avatar></ion-avatar>
          <ion-label>
            <span>Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="10">
            <ion-item class="ion-text-start">
              <ion-icon :icon="attachOutline"></ion-icon>
              <ion-input type="text" name="message" placeholder= "Comment here"></ion-input>
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
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { attachOutline, sendOutline } from 'ionicons/icons';


export default defineComponent ({
  name: 'Comments',
  components: {  IonToolbar, IonButtons, IonHeader, IonContent, IonPage, IonLabel },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    return {
      ...state,
      attachOutline,
      sendOutline
    };
  }
});
</script>
<style scoped>
  ion-input {
    background-color: transparent !important;
    box-shadow: none;
    font-size: 0.8rem;
  }
  ion-footer ion-item {
    border-radius: 1rem;
  }
  .comments {
    font-size: 0.8rem;
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  .comments p {
    font-size: 0.8rem;
  }
  ion-list {
    background: transparent;
  }
</style>
