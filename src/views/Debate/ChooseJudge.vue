<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home" :icon="closeOutline"></ion-back-button>
        </ion-buttons>
        <ion-title>CHOOSE JUDGE</ion-title>
      </ion-toolbar>
      <ion-segment value="from-debate">
        <ion-segment-button value="from-debate" v-on:click="tabActive = 'from-debate'">From Debate</ion-segment-button>
        <ion-segment-button value="recommended" v-on:click="tabActive = 'recommended'">Recommended</ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content class="from-debate" v-if="tabActive == 'from-debate'">
      <section class="from-debate ion-text-start">
        <h2><a class="ion-text-start" @click="collapse('fromDebate')"><ion-icon :icon="removeOutline"></ion-icon></a> Choose From Debate Participants</h2>
        <ion-list v-show="isCollapsed.fromDebate" color="transparent"  class="ion-no-padding">
          <ion-radio-group value="">
          <ion-item v-for="item in participants" v-bind:key="item" color="transparent" lines="none" class="ion-no-padding">
            <JudgeItem :name="item.name" :credibility="item.credibility" />
          </ion-item>
          </ion-radio-group>
        </ion-list>
      </section>
    </ion-content>
    <ion-content class="recommended" v-if="tabActive == 'recommended'">
      <section class="recommended ion-text-start">
        <h2><a @click="collapse('recommended')"><ion-icon :icon="removeOutline"></ion-icon></a>  Recommended Judges</h2>
        <ion-list v-show="isCollapsed.recommended" color="transparent"  class="ion-no-padding">
          <ion-radio-group value="">
          <ion-item v-for="item in judges" v-bind:key="item" color="transparent" lines="none" class="ion-no-padding">
            <JudgeItem :name="item.name" :credibility="item.credibility" />
          </ion-item>
          </ion-radio-group>
        </ion-list>
      </section>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button fill="clear" expand="block">SKIP</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button color="gradientblue" expand="block">VOTE</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonContent, IonItem, IonList, IonToolbar, IonButtons, IonButton,
         IonSegment, IonSegmentButton, IonBackButton, IonFooter, IonRadioGroup } from '@ionic/vue';
import { removeOutline, closeOutline } from 'ionicons/icons';
import JudgeItem from '@/components/JudgeItem.vue';

export default {
  name: 'Issue',
  components: { IonPage, IonHeader, IonContent, IonList, IonItem, IonToolbar, IonButtons, IonButton,
                IonSegment, IonSegmentButton, IonBackButton, IonFooter,
                JudgeItem, IonRadioGroup },
  data: function () {
        return {
            tabActive: 'from-debate',
            isCollapsed: {
              fromDebate: true,
              recommended: true
            },
            participants: [{
              name: 'Darlene Robertson',
              credibility: 90
            },
            {
              name: 'Darrel Steward',
              credibility: 89
            },
            {
              name: 'Kevin McKinney',
              credibility: 87
            },
            {
              name: 'Howard Hughes',
              credibility: 80
            }],
            judges: [{
              name: 'Danny De Vito',
              credibility: 90
            },
            {
              name: 'Michael Keaton',
              credibility: 89
            },
            {
              name: 'Michelle Pfeiffer',
              credibility: 87
            },
            {
              name: 'Michael Gough',
              credibility: 80
            }],
        }
  },
  methods: {
    collapse: function(item) {
      this.isCollapsed[item] = !this.isCollapsed[item];
    },
  },
  setup() {
    return {
      removeOutline, closeOutline
    };
  }
}
</script>
<style scoped>
  h2 {
    font-size: 1.1rem;
  }
  ion-list {
    background: transparent;
    --padding-end: 0;
    --inner-padding-end: 0;
  }
  ion-item {
    --padding-end: 0;
    --inner-padding-end: 0;
  }
</style>
