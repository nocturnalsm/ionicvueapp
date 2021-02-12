<template>
  <ion-row class="system ion-text-start" v-if="system">
    <ion-col size="12" class="ion-no-padding">
      <ion-card class="ion-no-padding">
        <ion-card-header class="ion-text-start">
          <ion-item color="transparent" lines="none" class="ion-no-padding">
            <ion-label slot="start">Jury of Peers Automated Message</ion-label>
            <ion-label class="system ion-text-end ion-text-uppercase subtitle">SYSTEM</ion-label>
          </ion-item>
        </ion-card-header>
        <ion-card-content>
          <p>This debate doesn't have any judges. Feel free to choose one from the link below:</p>
          <div class="choose-judge ion-text-center">
            <a href="/choose-judge"><ion-icon class="judge" src="/assets/icon/judge.svg"></ion-icon> CHOOSE A JUDGE</a>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
  <ion-row v-bind:class="posType" class="ion-text-start" v-else>
    <ion-col :size="colSize" :push="pushed" class="ion-no-padding">
      <ion-card class="ion-no-padding">
        <ion-card-header class="ion-text-start">
          <ion-item color="transparent" lines="none" class="ion-no-padding">
            <ion-label slot="start">Darlene Robertson  <ion-icon class="judge" v-if="posType == 'judge'" src="/assets/icon/judge.svg"></ion-icon></ion-label>
            <ion-label :class="posType" class="ion-text-end ion-text-uppercase subtitle">{{ posType }}</ion-label>
          </ion-item>
        </ion-card-header>
        <ion-card-content>
          <p>{{ message }}</p>
          <div class="ion-text-right">
            <ion-label class="ion-text-end"><small>{{ messageTime }}</small></ion-label>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-col>
    <ion-col v-if="showCircle == true" size="1" :pull="pulled" class="ion-no-padding">
      <ion-icon src="/assets/icon/circle.svg" class="circle" :class="posType" />
    </ion-col>
  </ion-row>
</template>
<script>

import { IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
         IonLabel, IonIcon, IonItem } from '@ionic/vue';

export default {
  name: 'IssueItem',
  components: { IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
                IonLabel, IonIcon, IonItem },
  props: {
    posType: {
      type: String,
      default: 'pln'
    },
    system: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: "This is a message"
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },
  computed: {
    colSize: function(){
      return this.posType == 'pln' || this.posType == 'dfn'  || this.posType == 'claimant' ? 11 : 12;
    },
    pulled: function(){
      return this.posType == 'dfn' || this.posType == 'claimant' ? 11 : 0;
    },
    pushed: function(){
      return this.posType == 'dfn' || this.posType == 'claimant' ? 1 : 0;
    },
    showCircle: function(){
      return this.posType == 'pln' || this.posType == 'dfn' || this.posType == 'claimant';
    },
    messageTime: function(){
      const time = this.timestamp == 0 ? new Date() : new Date(this.timestamp);
      return time.getHours() + ":" + time.getMinutes();
    }
  }
}
</script>
<style scoped>
ion-card-header {
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
}
ion-card ion-label, ion-card-header ion-label, ion-card p {
  font-size: 0.8rem !important;
}
ion-row.pln ion-card, ion-row.claimant ion-card {
  background: #1D1E22;
  border-radius: 0px 1rem 1rem 1rem;
}
ion-row.system ion-card {
  background: linear-gradient(10.15deg, #000000 0%, #0164A8 101.02%);
  color: var(--ion-text-color);
}
ion-row.dfn ion-card {
  background: #1D1E22;
  border-radius: 1rem 0px 1rem 1rem;
}
ion-row.judge ion-card {
  background: linear-gradient(100.15deg, #91764E 0.63%, #58402A 101.02%);
  border-radius: 1rem;
  color: var(--ion-text-color);
}
ion-row.jury ion-card {
  background: linear-gradient(100.15deg, #24292F 0.63%, #212932 101.02%);
  border-radius: 1rem;
}
.judge svg path {
  fill: #FFFFFF !important;
  stroke: #FFFFFF !important;
}
ion-icon.circle {
  width: 3rem;
  height: 3rem;
}
.choose-judge {
  margin-top: 1rem;
  font-size: 1.2rem;
}
.choose-judge ion-icon.judge svg path {
  color: #38B7FF !important;
  fill: #38B7FF !important;
}
</style>
