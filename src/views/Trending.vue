<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <TopToolbar title="TRENDING" />
    </ion-header>
    <ion-content>
      <ion-searchbar></ion-searchbar>
      <hr>
      <ion-item color="transparent" lines="none">
        <DebateItem :join="true" :trending="true" />
      </ion-item>
      <ion-item color="transparent" lines="none">
        <DebateItem :join="true" :trending="true" />
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonItem,
          IonSearchbar } from '@ionic/vue';
import TopToolbar from '@/components/TopToolbar.vue';
import { search } from 'ionicons/icons';
import DebateItem from '@/components/DebateItem.vue';

export default {
  name: 'Trending',
  components: { IonPage, IonHeader, IonContent, IonItem,
                IonSearchbar, TopToolbar, DebateItem },
  setup() {
    return {
      search
    }
  }
}
</script>
<style scoped>
  #credibility-label {
    font-size: 0.9rem;
    opacity: 0.6;
  }
  ion-searchbar {
    border-radius: 1rem;
    box-shadow: 8px 8px 30px rgba(202, 212, 226, 0.08), -8px -8px 15px rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
    height: 3.5rem;
    text-align: left;
  }
  ion-searchbar searchbar-input-container {
    --background: transparent;
    box-shadow: none;
  }
  ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
</style>
