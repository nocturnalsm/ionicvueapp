<template>
<ion-grid>
  <ion-row>
    <ion-col size="12" class="ion-text-start">
      <ion-text>Choose Evidence</ion-text>
      <ion-button expand="full">ADD NEW EVIDENCE</ion-button>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="12" class="ion-text-center">
      or select from below
    </ion-col>
  </ion-row>
</ion-grid>
<ion-list>
  <ion-item color="transparent" lines="none">
    <EvidenceItem name="Evidence 01" evidence-type="audio" />
  </ion-item>
  <ion-item color="transparent" lines="none">
    <EvidenceItem name="Evidence 02" evidence-type="video" />
  </ion-item>
  <ion-item color="transparent" lines="none">
    <EvidenceItem name="Evidence 03" evidence-type="link" />
  </ion-item>
</ion-list>
</template>
<script>
import { IonGrid, IonRow, IonCol, IonText, IonList, IonButton, IonItem } from '@ionic/vue';
import EvidenceItem from "@/components/EvidenceItem.vue";

export default {
  name: 'DebateEvidence',
  components: { IonGrid, IonRow, IonCol, IonText, IonList, EvidenceItem, IonButton, IonItem }
}
</script>
<style scoped>
  ion-item {
    --inner-padding-start: 0;
    --inner-padding-end: 0;
    --padding-start: 0;
    --padding-end: 0;
  }
  ion-list {
    background: transparent;
  }
</style>
