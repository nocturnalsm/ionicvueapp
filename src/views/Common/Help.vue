<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title slot="start">HELP</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-card class="accordion">
          <ion-card-header>
            <ion-item color="transparent" lines="none">
              <ion-label slot="start">
                <h2>QUESTION 1</h2>
              </ion-label>
              <ion-button slot="end" fill="clear">
                <ion-icon :icon="chevronDownOutline" />
              </ion-button>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.</p>
          </ion-card-content>
        </ion-card>
        <ion-card class="accordion">
          <ion-card-header>
            <ion-item color="transparent" lines="none">
              <ion-label slot="start">
                <h2>QUESTION 1</h2>
              </ion-label>
              <ion-button slot="end" fill="clear">
                <ion-icon :icon="chevronDownOutline" />
              </ion-button>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.</p>
          </ion-card-content>
        </ion-card>
        <ion-card class="accordion">
          <ion-card-header>
            <ion-item color="transparent" lines="none">
              <ion-label slot="start">
                <h2>QUESTION 1</h2>
              </ion-label>
              <ion-button slot="end" fill="clear">
                <ion-icon :icon="chevronDownOutline" />
              </ion-button>
            </ion-item>
          </ion-card-header>
          <ion-card-content>
              <p>Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.</p>
          </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import useFirebaseAuth from "../../hooks/firebase-auth";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonCard } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { chevronDownOutline, chevronBackOutline } from 'ionicons/icons';


export default defineComponent ({
  name: 'Help',
  components: {  IonToolbar, IonButtons, IonHeader, IonBackButton, IonContent, IonPage, IonCard },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    return {
      ...state,
      chevronDownOutline, chevronBackOutline
    };
  },
  method: {

  }
});
</script>
<style scoped>
  ion-card {
    background: #1D1E22;
    border-radius: 14px;
    text-align: left;
  }
  ion-card-header {
    padding-top: 1rem;
    padding-bottom: 0px;
  }
  ion-card-content {
    padding: 0.8rem;
    min-height: 5rem;
  }
  ion-card h2 {
    font-size: 1rem;

  }
  ion-card p {
    font-size: 0.8rem;
    margin: 0 1rem 1rem 1rem;
  }
  .accordion ion-item {
    --inner-padding-end: 0px;
  }
  .accordion button {
    font-size: 0.8rem;
    background-color: transparent !important;
    --inner-padding-end: 0px;
  }

</style>
