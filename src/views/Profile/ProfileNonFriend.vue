<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ProfileToolbar friends="false" />
    </ion-header>
    <ion-content>
      <ProfileAvatar />
      <Stats :credibility="100" :honored="3" :totalcase="20" :win="2" :lost="4" />
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button fill="clear">INVITE</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" @click="savePassword()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              {{ !isLoading ? "ADD FRIEND" : "" }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import ProfileToolbar from '@/components/ProfileToolbar.vue';
import Stats from '@/components/Stats.vue';

export default {
  name: 'ProfileNonFriend',
  components: { IonPage, IonHeader, IonContent, ProfileAvatar, ProfileToolbar, Stats },
}
</script>
<style scoped>
  ion-footer {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
</style>
