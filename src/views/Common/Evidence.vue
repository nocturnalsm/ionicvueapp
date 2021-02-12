<template>
    <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title slot="start">EVIDENCE</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-item v-for="item in evidences" v-bind:key="item" color="transparent" lines="none">
          <EvidenceItem :name="item.name" checkable="false" :evidence-type="item.type" />
        </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import useFirebaseAuth from "../../hooks/firebase-auth";
import EvidenceItem from "@/components/EvidenceItem.vue";
import { IonPage, IonHeader, IonToolbar, IonButtons, IonContent,
         IonBackButton, IonTitle } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  name: 'Evidence',
  components: {  IonPage, IonHeader, IonToolbar, IonButtons, IonContent,
                 IonBackButton, IonTitle, EvidenceItem
  },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    return {
      ...state, chevronBackOutline
    };
  },
  data: function(){
    return {
      evidences: [
        {
            name: 'Evidence 01',
            type: 'audio'
        },
        {
            name: 'Evidence 02',
            type: 'video'
        },
        {
            name: 'Evidence 03',
            type: 'link'
        }
      ]
    }
  }
});
</script>
<style scoped>
  ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
  }
</style>
