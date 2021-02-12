<template>
    <div class="slide-friends">
      <ion-avatar />
      <ion-label class="name" position="stacked">{{ friendName }}</ion-label>
      <ion-checkbox class="check" name="checked" slot="end" v-if="checkable == true && checkType == 'checkbox'"></ion-checkbox>
      <ion-radio :value="friendName" class="check" name="checked" slot="end" v-if="checkable == true && checkType == 'radio'"></ion-radio>
    </div>
</template>
<script>

import { IonAvatar, IonLabel, IonCheckbox, IonRadio } from '@ionic/vue';

export default {
  name: 'Friend',
  components: { IonAvatar, IonLabel, IonCheckbox, IonRadio },
  props: {
    friendName: {
      type: String
    },
    checkable: {
      type: Boolean,
      default: true
    },
    checkType: {
      type: String,
      default: 'checkbox'
    }
  }
}
</script>
<style scoped>
.slide-friends {
  font-size: 0.9rem;
  color: rgba(var(--ion-text-color-rgb), 0.6);
  border-radius: 1rem;
  height: 9rem;
  padding: 0.5rem;
  width: 100%;
  background: linear-gradient(135deg, #22272E 0%, #0C0D10 100%);
  white-space: initial;
}
ion-checkbox, ion-radio {
  position: absolute;
  height: 1.6rem;
  width: 1.6rem;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1rem;
}
</style>
