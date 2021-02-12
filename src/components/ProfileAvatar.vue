<template>
    <ion-chip>
    </ion-chip>
    <div class="title">
      <h2>{{ name }}</h2>
      <h3>{{ numberOfIssues }} issues</h3>
    </div>
</template>

<script lang="ts">
import { IonChip } from '@ionic/vue';

export default {
  name: 'ProfileAvatar',
  components: {  IonChip },
  data: function () {
        return {
            name: 'Floyd Miles',
            numberOfIssues: 25
        }
  },
};
</script>
<style scoped>
  ion-chip {
    border-radius: 50%;
    height: 8.5rem;
    width: 8.5rem;
    background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
    box-shadow: -0.5px 0.5px 0px rgba(202, 212, 226, 0.05), 0.5px -0.5px 0px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(202, 212, 226, 0.1), 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
  h2 {
    font-size: 1.1rem;
    font-weight: bolder;
  }
  h3 {
    font-size: 0.9rem;
    color: rgba(var(--ion-text-color-rgb), 0.6);
    margin-bottom: -8px;
  }
  .title {
    margin-bottom: 2rem;
  }
</style>
