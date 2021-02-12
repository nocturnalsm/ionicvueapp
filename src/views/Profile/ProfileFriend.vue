<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ProfileToolbar />
    </ion-header>
    <ion-content>
      <ProfileAvatar />
      <Stats :credibility="100" :honored="3" :totalcase="20" :win="2" :lost="4" />
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" @click="savePassword()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              {{ !isLoading ? "INVITE TO A DEBATE" : "" }}
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
  name: 'ProfileFriend',
  components: { IonPage, IonHeader, IonContent, ProfileAvatar, ProfileToolbar, Stats },
}
</script>
<style scoped>
</style>
