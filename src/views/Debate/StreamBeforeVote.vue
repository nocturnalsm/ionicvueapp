<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>ROUND {{ round }}</ion-title>
        <ion-buttons slot="end">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7143 3C9.80497 3 8.9329 3.36122 8.28992 4.00421C7.64694 4.64719 7.28571 5.51926 7.28571 6.42857C7.28571 7.33789 7.64694 8.20996 8.28992 8.85294C8.9329 9.49592 9.80497 9.85714 10.7143 9.85714C11.6236 9.85714 12.4957 9.49592 13.1387 8.85294C13.7816 8.20996 14.1429 7.33789 14.1429 6.42857C14.1429 5.51926 13.7816 4.64719 13.1387 4.00421C12.4957 3.36122 11.6236 3 10.7143 3ZM15.8571 10.7143C13.0286 10.7143 10.7143 13.0286 10.7143 15.8571C10.7143 18.6857 13.0286 21 15.8571 21C18.6857 21 21 18.6857 21 15.8571C21 13.0286 18.6857 10.7143 15.8571 10.7143ZM9.90067 12.4688C7.1921 12.6933 3 13.968 3 16.2857V18.4286H9.50391C9.18162 17.634 9 16.7674 9 15.8571C9 14.6229 9.32981 13.469 9.90067 12.4688ZM15.8571 13.2857C16.3303 13.2857 16.7143 13.6697 16.7143 14.1429V15H17.5714C18.0446 15 18.4286 15.384 18.4286 15.8571C18.4286 16.3303 18.0446 16.7143 17.5714 16.7143H16.7143V17.5714C16.7143 18.0446 16.3303 18.4286 15.8571 18.4286C15.384 18.4286 15 18.0446 15 17.5714V16.7143H14.1429C13.6697 16.7143 13.2857 16.3303 13.2857 15.8571C13.2857 15.384 13.6697 15 14.1429 15H15V14.1429C15 13.6697 15.384 13.2857 15.8571 13.2857Z" fill="#7A8189"/>
          </svg>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content id="fixedbar">
      <ion-grid color="transparent">
        <ion-row class="votes">
          <ion-col  class="ion-text-end" size="5">
            <ion-chip>3</ion-chip>
          </ion-col>
          <ion-col class="ion-text-start" offset="2" size="5">
            <ion-chip>0</ion-chip>
          </ion-col>
        </ion-row>
        <ion-row class="people">
          <ion-col size="5" class="ion-text-end">
            <ion-chip>Nelly</ion-chip>
          </ion-col>
          <ion-col size="2" class="ion-text-center ion-align-self-center">
            <ion-label>VOTE</ion-label>
          </ion-col>
          <ion-col size="5" class="ion-text-start">
            <ion-chip>Ludacris</ion-chip>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-content>
      <ion-list class="ion-no-padding">
        <ion-item class="comments ion-no-padding ion-padding-start ion-padding-end" color="transparent" lines="none">
          <ion-label class="ion-no-margin">
            <span class="subtitle">Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
        <ion-item class="comments ion-no-padding ion-padding-start ion-padding-end" color="transparent" lines="none">
          <ion-label class="ion-no-margin">
            <span class="subtitle">Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
        <ion-item class="comments ion-no-padding ion-padding-start ion-padding-end" color="transparent" lines="none">
          <ion-label class="ion-no-margin">
            <span class="subtitle">Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
        <ion-item class="comments ion-no-padding ion-padding-start ion-padding-end" color="transparent" lines="none">
          <ion-label class="ion-no-margin">
            <span class="subtitle">Darlene Robertson</span>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row class="message ion-no-padding">
          <ion-col size="10">
            <ion-item class="ion-text-start">
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
<script>
import { IonPage, IonHeader, IonContent, IonItem, IonToolbar, IonButtons, IonButton,
         IonList, IonBackButton, IonGrid, IonRow, IonCol, IonFooter } from '@ionic/vue';
import { chevronBackOutline, sendOutline } from 'ionicons/icons';

export default {
  name: 'StreamBeforeVote',
  components: { IonPage, IonHeader, IonContent, IonItem, IonToolbar, IonButtons, IonButton,
                IonList, IonBackButton, IonGrid, IonRow, IonCol, IonFooter },
  props: {
    round: {
      type: Number
    }
  },
  setup() {
    return {
      sendOutline, chevronBackOutline
    };
  }
}
</script>
<style scoped>
  h2 {
    font-size: 1.1rem;
    text-align: left;
    margin-left: 1rem;
  }
  ion-list {
    background: transparent;
  }
  ion-list ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
  .comments .subtitle {
    font-size: 0.8rem;
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  .comments p {
    color: var(--ion-text-color);
    font-size: 0.9rem;
  }
  .votes {
    height: 10rem;
  }
  .votes ion-chip {
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 0.5rem;
  }
  .people ion-chip {
    background: linear-gradient(135deg, #22272E 0%, #0C0D10 100%);
    box-shadow: -5px -5px 20px rgba(202, 212, 226, 0.16), 5px 5px 15px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    font-size: 1rem;
    min-width: 8rem;
    height: 3rem;
    justify-content: center;
  }
  .people ion-label {
    color: #ED9511;
    font-size: 0.9rem;
  }
  ion-input {
    background-color: transparent !important;
    box-shadow: none;
    font-size: 0.8rem;
  }
  .message ion-item {
    border-radius: 1rem !important;
  }
  .message ion-col {
    margin-top: 0.5rem;
    padding-bottom: 0rem;
  }
  #fixedbar {
    height: 15rem;
  }
</style>
