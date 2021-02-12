<template>
  <ion-item v-if="showcredibility" lines="none">
    <ion-label slot="start">
      <h2 class="credibility">{{ credibility }}%</h2>
      <span>Credibility</span>
    </ion-label>
    <ion-label class="ion-text-end" slot="end">
      <ion-icon :icon="star"></ion-icon>
    </ion-label>
  </ion-item>
  <ion-item color="transparent" lines="none">
    <ion-grid>
      <ion-row>
        <ion-col size="6">
          <h2 class="settlement">{{ honored }}%</h2>
          <span>Settlement honored</span>
        </ion-col>
        <ion-col size="6">
          <h2 class="totalcases">{{ totalcase }}</h2>
          <span>Total Cases</span>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <h2 class="win">{{ win }}</h2>
          <span>Win</span>
        </ion-col>
        <ion-col size="6">
          <h2 class="lost">{{ lost }}</h2>
          <span>Lost</span>
        </ion-col>
      </ion-row>
      <ion-row v-if="showdislike">
        <ion-col size="6">
          <h2 class="like">{{ likes }}</h2>
          <span>Likes</span>
        </ion-col>
        <ion-col size="6">
          <h2 class="dislike">{{ dislikes }}</h2>
          <span>Dislikes</span>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-item>
</template>
<style scoped>
  h2 {
    font-size: 1.4rem;
    color: var(--ion-text-color);
    margin-bottom: -4px;
  }
  h2+span {
    font-size: 0.9rem;
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  ion-item:first-of-type:not(:last-of-type) {
    border-radius: 1rem;
    background: linear-gradient(180deg, #0C0D10 0%, #22272E 164.77%);
    box-shadow: 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
  }

</style>
<script>

import { star } from 'ionicons/icons';
import { IonItem, IonLabel, IonRow, IonGrid, IonCol } from '@ionic/vue';
export default {
  name: 'Stats',
  components: { IonItem, IonLabel, IonRow, IonGrid, IonCol },
  props: {
      showcredibility: {
        type: Boolean,
        default: true
      },
      credibility: Number,
      honored: Number,
      totalcase: Number,
      win: Number,
      lost: Number,
      likes: Number,
      dislikes: Number,
      showdislike: {
        type: Boolean,
        default: false
      }
  },
  setup() {
    return { star }
  }
}
</script>
