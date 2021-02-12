<template>
  <ion-app>
    <NavMenu />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavMenu.vue';
import useFirebaseAuth from "./hooks/firebase-auth";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    NavMenu
  }
});
</script>
