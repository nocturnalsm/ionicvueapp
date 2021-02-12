<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="close" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title text-center>SESSION CLOSED</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <BattleItem :show-vote="true" :show-toolbar="false" />
        <h3 class="title"><a @click="collapse()"><ion-icon :icon="removeOutline"></ion-icon></a> Settlement Request</h3>
        <ion-list class="settlement" v-if="collapsed">
          <ion-item lines="none" class="ion-padding-start">
              <ion-label class="ion-padding-start">Concert Ticket</ion-label>
          </ion-item>
        </ion-list>
        <div class="winner ion-text-center ion-align-self-baseline">
          <h3>THE WINNER OF THIS CASE</h3>
          <h2>LUDACRIS</h2>
        </div>
      </ion-content>
    <ion-footer class="ion-padding ion-no-border">
      <ion-button expand="block" color="gradientblue">OK</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonBackButton } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { close, removeOutline } from 'ionicons/icons';
import BattleItem from '@/components/BattleItem.vue';

export default defineComponent ({
  name: 'DebateWinner',
  components: {  IonToolbar, IonButtons, IonHeader, IonContent, IonPage, BattleItem, IonBackButton },
  setup() {
    return {
      close, removeOutline
    };
  },
  data: function(){
    return {
        collapsed: true
    }
  },
  methods: {
    collapse(){
      this.collapsed = !this.collapsed;
    }
  }
});
</script>
<style scoped>
  ion-item {
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  h2 {
    font-size: 1.3rem;
    font-weight: bolder;
  }
  h3 {
    font-size: 1.2rem;
  }
  ion-list ion-item {
    --border-radius: 1rem;
  }
  h3.title {
    text-align:left;
  }
  .settlement {
    background: transparent;
  }
  .settlement ion-item {
    padding: 0 1rem 0 1rem;
    margin-bottom: 0.5rem;
    --border-radius: 1rem;
  }
  .winner {
    position: absolute;
    bottom: 20px;
    text-align: center;
    margin-left: -1rem;
    width: 100%;
  }
</style>
