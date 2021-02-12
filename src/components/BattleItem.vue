<template>
  <ion-card>
    <ion-card-content>
      <ion-grid>
        <ion-row v-if="showJudge == true" class="judge">
          <ion-col size="12" class="ion-text-start ion-align-items-start">
            <ion-item color="transparent" lines="none">
              <ion-avatar slot="start" class="ion-align-self-start">
                <ion-img src="/assets/icon/icon.png"/>
              </ion-avatar>
              <ion-label slot="start">
                <h2>Floyd Miles</h2>
                <span class="subtitle">Judge</span>
              </ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row class="title" v-if="claimantOnly == false">
          <ion-col size="5" v-if="showVote == true">
            <ion-label class="winnercheck"><ion-icon v-if="winner == 'left'" :icon="checkmarkCircle"></ion-icon></ion-label>
          </ion-col>
          <ion-col :size="showVote ? 2 : 12 " class="ion-text-center">
            <ion-chip>VS</ion-chip>
          </ion-col>
          <ion-col size="5" v-if="showVote == true">
            <ion-label class="winnercheck"><ion-icon v-if="winner == 'right'" :icon="checkmarkCircle"></ion-icon></ion-label>
          </ion-col>
          <ion-col class="ion-text-center" size="6">
            <ion-text class="pln-name ion-justify-content-center">Nelly</ion-text>
            <ion-label v-if="showPosition == true" class="pln">PLN <ion-icon :icon="helpCircleOutline"></ion-icon></ion-label>
            <ion-label class="loser" v-if="showVote == true">16K</ion-label>
          </ion-col>
          <ion-col class="ion-text-center bright" size="6">
            <ion-text class="dfn-name ion-justify-content-center">Ludacris</ion-text>
            <ion-label v-if="showPosition == true" class="dfn">DFN <ion-icon :icon="helpCircleOutline"></ion-icon></ion-label>
            <ion-label class="winner" v-if="showVote == true">24K</ion-label>
          </ion-col>
        </ion-row>
        <ion-row class="title" v-else>
          <ion-col class="ion-text-center" size="12">
            <ion-text class="pln-name ion-justify-content-center">Darrel Steward</ion-text>
            <ion-label class="claimant">CLAIMANT <ion-icon :icon="helpCircleOutline"></ion-icon></ion-label>
          </ion-col>
        </ion-row>
        <ion-row class="toolbar" v-if="showToolbar == true && claimantOnly == false">
          <ion-col class="subtitle ion-align-self-center">+16 people has joined this battle</ion-col>
          <ion-col>
            <ion-button expand="block" class="watch-button" size="large" color="gradientblue">WATCH NOW</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>
<script>
  import { defineComponent } from "vue";
  import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton,
           IonChip, IonIcon, IonItem, IonText,
           IonLabel, IonImg, IonAvatar } from '@ionic/vue';
  import { helpCircleOutline, checkmarkCircle } from 'ionicons/icons';

  export default defineComponent ({
    name: 'BattleItem',
    components: {  IonCard, IonGrid, IonRow, IonCol,
                   IonCardContent, IonLabel, IonImg, IonAvatar,
                   IonButton, IonChip, IonIcon, IonItem, IonText
    },
    props: {
      winner: {
        type: String,
        default: 'right'
      },
      showToolbar: {
        type: Boolean,
        default: true
      },
      showPosition: {
        type: Boolean,
        default: false
      },
      showJudge: {
        type: Boolean,
        default: false
      },
      claimantOnly: {
        type: Boolean,
        default: false
      },
      showVote: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      return { helpCircleOutline, checkmarkCircle }
    }
  });
</script>
<style scoped>
ion-card {
  background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
  border-radius: 12px;
}
ion-card-content {
  padding: 1rem 0 1rem 0;
}
ion-card p {
  font-size: 0.9rem;
  white-space: initial;
  text-overflow: initial;
  line-height: 1rem;
}
.subtitle {
  font-size: 0.8rem;
  opacity: 0.4;
  line-height: 1.2rem !important;
}
h2 {
  font-size: 1rem;
  color: var(--ion-text-color);
  margin-bottom: -0.2rem;
}
ion-item {
  color: rgba(var(--ion-text-color-rgb), 0.6);
  --inner-padding-end: 1rem;
}
.title {
  color: rgba(var(--ion-text-color-rgb), 0.6);
}
.title .bright {
  color: rgba(var(--ion-text-color-rgb));
}
.watch-button {
  font-size: 1rem;
}
ion-button.watch-button {
  min-width: 8rem !important;
}
ion-avatar ion-img {
  width: 2.5rem;
  height: auto;
}
.pln-name, .dfn-name {
  font-size: 1.2rem;
  display: block;
}
.loser, .winner {
  margin-top: 2rem !important;
  font-size: 1.2rem;
}
.winner {
  font-weight: bolder;
}
.winnercheck ion-icon {
  font-size: 2rem;
  color: #9DFFCE;
}
</style>
