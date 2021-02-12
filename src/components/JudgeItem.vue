<template>
    <ion-card class="judge-item">
      <ion-card-content>
          <ion-grid>
            <ion-row class="ion-no-padding">
              <ion-col size="3">
                <ion-avatar></ion-avatar>
              </ion-col>
              <ion-col size="7">
                <ion-label class="label-name" color="white">{{ name }}</ion-label>
                <span class="subtitle">Recommended by JOP</span>
              </ion-col>
              <ion-col size="2" class="ion-justify-content-end">
                <ion-radio :value="name"></ion-radio>
              </ion-col>
            </ion-row>
            <ion-row class="ion-no-padding">
              <ion-col class="ion-align-self-end">
                Credibility
              </ion-col>
              <ion-col color="white" class="ion-text-end ion-align-self-end">
                <ion-text class="label-credibility">{{ credibility }} %</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonGrid, IonText, IonRow, IonCol, IonLabel, IonAvatar, IonRadio } from '@ionic/vue';
import { defineComponent, ref } from "vue";

export default defineComponent ({
  name: 'JudgeItem',
  components: {  IonCard, IonCardContent, IonText, IonGrid, IonRow, IonCol, IonLabel, IonAvatar, IonRadio },
  props: {
    name: {
      type: String
    },
    credibility: {
      type: Number
    }
  }
});
</script>
<style scoped>
  ion-card {
    background: #1D1E22;
    border-radius: 14px;
    text-align: left;
    width: 100%;
  }
  ion-card ion-item {
    --padding-start: 0;
  }
  ion-card-content {
    padding-top: 0.8;
    min-height: 5rem;
    font-size: 0.9rem;
  }
  ion-radio {
    height: 1.6rem;
    width: 1.6rem;
    margin: 0 auto;
  }
  .subtitle {
    font-size: 0.8rem;
  }
  .label-name, .label-credibility {
    color: var(--ion-text-color) !important;
    font-size: 1rem;
  }
  .label-credibility {
    color: var(--ion-text-color) !important;
    font-size: 1.1rem;
    font-weight: bolder;
  }
</style>
