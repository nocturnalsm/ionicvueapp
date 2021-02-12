<template>
  <ion-grid v-if="lockFooter">
      <ion-row class="locked ion-text-start">
        <ion-col class="ion-text-end ion-align-items-center" size="2">
          <ion-icon class="lock" :icon="lockClosed"></ion-icon>
        </ion-col>
        <ion-col size="10">
          <ion-label class="ion-text-left">
            Voting and Chatting are locked until you check all the evidence
          </ion-label>
        </ion-col>
      </ion-row>
  </ion-grid>
  <ion-grid v-else>
    <ion-row class="votebar" v-if="showVotebar">
        <ion-col v-if="canVote">
          <ion-label>Vote <ion-icon class="circle dfn" src="/assets/icon/circle.svg" /></ion-label>
        </ion-col>
        <ion-col v-if="canLock" class="ion-text-center">
            <ion-icon @click="lockIssue()" class="lock" :icon="lockStatus.icon" />
            <ion-label position="stacked">{{ lockStatus.text }}</ion-label>
        </ion-col>
        <ion-col v-if="canVote">
          <ion-label>Vote <ion-icon class="circle pln" src="/assets/icon/circle.svg" /></ion-label>
        </ion-col>
    </ion-row>
    <ion-row class="message" v-if="showChatInput">
      <ion-col size="10">
        <ion-item class="ion-text-start">
          <ion-icon :icon="attachOutline"></ion-icon>
          <ion-input v-on:keyup.enter="submitMessage" ref="input" type="text" name="message" placeholder= "Write A Message"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="2">
        <ion-button @click="submitMessage()" color="gradientblue">
          <ion-icon :icon="sendOutline"></ion-icon>
        </ion-button>
      </ion-col>
   </ion-row>
  </ion-grid>
</template>
<script>
import { IonItem, IonGrid, IonRow, IonCol, IonInput, IonLabel, IonIcon, IonButton } from '@ionic/vue';
import { lockClosed, attachOutline, sendOutline, lockOpen } from 'ionicons/icons';

export default {
  name: 'Issue',
  components: { IonItem, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonIcon, IonButton },
  data: function(){
    return {
      isLocked: this.locked
    }
  },
  props: {
    locked: {
      type: Boolean,
      default: false
    },
    showVotebar: {
      type: Boolean,
      default: true
    },
    canLock: {
      type: Boolean,
      default: true
    },
    canVote: {
      type: Boolean,
      default: true
    },
    showChatInput: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {
      lockClosed, attachOutline, sendOutline, lockOpen
    };
  },
  methods: {
    lockIssue: function(){
      this.isLocked = !this.isLocked;
    },
    submitMessage: function(){
      const input = this.$refs['input'].$el;
      const value = input.value.trim();
      if (value != ""){
        input.value = "";
        input.setFocus();
        this.$emit('message', value);
      }
    }
  },
  computed: {
    lockFooter(){
      return this.isLocked == true && this.canLock == false;
    },
    lockStatus(){
      return this.isLocked ? { icon: lockOpen, text: "Unlock Chat"} : { icon: lockClosed, text: "Lock Chat" };
    }
  }
}
</script>
<style scoped>
  ion-input {
    background-color: transparent !important;
    box-shadow: none;
    font-size: 0.8rem;
  }
  ion-icon.lock {
    font-size: 2rem;
    width: 100%;
  }
  ion-icon.circle {
    width: 4rem;
    height: 4rem;
    vertical-align: middle;
  }
  ion-input {
    background-color: transparent !important;
    box-shadow: none;
    font-size: 0.8rem;
  }
  .message ion-item {
    border-radius: 1rem !important;
  }
</style>
