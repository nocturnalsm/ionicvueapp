<template>
<ion-grid>
  <ion-row>
    <ion-col size="12" class="ion-text-start">
      <ion-text>Battle Settings</ion-text>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="12">
      <ion-input type="number" min="1" max="10" inputmode="numeric" step="1" placeholder="Number of Rounds" name="rounds" />
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="12">
      <ion-input type="number" min="1" max="300" inputmode="numeric" step="1" placeholder="Duration" name="duration" />
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="12">
      <ion-datetime display-format="YYYY MMMM DD" placeholder="Date" name="date" />
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="12">
      <ion-datetime display-format="HH:ss" placeholder="Time" name="time" />
    </ion-col>
  </ion-row>
</ion-grid>
</template>
<script>
import { IonGrid, IonRow, IonCol, IonDatetime, IonText, IonInput } from '@ionic/vue';

export default {
  name: 'BattleSettings',
  components: { IonGrid, IonRow, IonCol, IonDatetime, IonText, IonInput }
}
</script>
<style scoped>
ion-input {
  color: rgba(var(--ion-text-color-rgb), 0.6);
}
ion-datetime {
  text-align: left;
  color: rgba(var(--ion-text-color-rgb), 0.6) !important;
  border-radius: 1rem;
  height: 3.5rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(202, 212, 226, 0.08), -0.5rem -0.5rem 1rem rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
}
ion-datetime {
  padding-top: 1rem;
}
</style>
