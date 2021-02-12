<template>
  <ion-row class="ion-align-items-start ion-text-start">
    <ion-col size="11">
      <ion-card>
        <ion-card-content>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <div class="ion-text-right">
            <ion-label class="ion-text-end"><small>12:21 PM</small></ion-label>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</template>
<script>
import { IonGrid, IonROw, IonCol, IonCard, IonCardContent, IonLabel } from '@ionic/vue';

export default {
  name: 'MessageItem',
  components: {  IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel },
  setup() {
    return {

    };
  }
};
</script>
