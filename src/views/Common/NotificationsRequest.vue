<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/notifications" :icon="close"></ion-back-button>
        </ion-buttons>
        <ion-title text-center>DEBATE REQUEST</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="title">
          <ion-chip>
          <svg viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0837 0.75C10.2291 0.75 7.917 3.06208 7.917 5.91667V13.6667L2.5031 19.0806C1.64027 19.9434 2.25252 21.4167 3.47185 21.4167H13.0837H46.667C49.5216 21.4167 51.8337 19.1046 51.8337 16.25V5.91667C51.8337 3.06208 49.5216 0.75 46.667 0.75H13.0837ZM13.0837 26.5833C10.2291 26.5833 7.917 28.8954 7.917 31.75V37.5675L0.570646 44.9139C-0.292187 45.7767 0.320063 47.25 1.5394 47.25H7.917H11.1512H46.667C49.5216 47.25 51.8337 44.9379 51.8337 42.0833V31.75C51.8337 28.8954 49.5216 26.5833 46.667 26.5833H13.0837Z"/>
          </svg>
          </ion-chip>
          <h2>DEBATE REQUEST</h2>
          <h3>Jesse McGill has requested to debate with you on your status</h3>
        </div>
        <DebateItem :toolbar="false" :stats="true" :disputable="false" />
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button fill="clear">DECLINE</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button color="gradientblue">ACCEPT</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonChip, IonTitle,
         IonGrid, IonRow, IonCol, IonFooter, IonButton,
         IonContent, IonBackButton } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import DebateItem from '@/components/DebateItem.vue';
import { close } from 'ionicons/icons';


export default defineComponent ({
  name: 'NotificationRequest',
  components: {  IonToolbar, IonButtons, IonHeader, IonContent, IonChip, IonTitle,
                 IonGrid, IonRow, IonCol, IonFooter, IonButton,
                 IonPage, DebateItem, IonBackButton },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();

    return {
      ...state,
      close
    };
  }
});
</script>
<style scoped>
  .title ion-chip {
    border-radius: 50%;
    height: 8.5rem;
    width: 8.5rem;
    background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
    box-shadow: -0.5px 0.5px 0px rgba(202, 212, 226, 0.05), 0.5px -0.5px 0px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(202, 212, 226, 0.1), 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
  ion-content {
    --padding-bottom: 1.5rem;
    --padding-top: 1.5rem;
  }
  ion-item {
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  .title ion-chip svg {
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 auto;
    fill: rgba(var(--ion-text-color-rgb), 0.6);
  }
  h2 {
    font-size: 1.1rem;
    font-weight: bolder;
  }
  h3 {
    font-size: 0.9rem;
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  h4 {
    font-size: 0.8rem;
    margin-bottom: -10px;
  }
  .title {
    width: 90%;
    margin: 0 auto;
  }

</style>
