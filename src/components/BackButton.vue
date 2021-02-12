<template>
  <ion-button @click="back()"><ion-icon :icon="chevronBackOutline"></ion-icon></ion-button>
</template>

<script lang="ts">
import useFirebaseAuth from "../hooks/firebase-auth";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IonButton } from "@ionic/vue";
import { chevronBackOutline } from 'ionicons/icons';

export default defineComponent ({
  name: 'BackButton',
  components: {  IonButton },
  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();
    const back = () => {
      window.history.back();
    };
    return {
      ...state,
      back,
      chevronBackOutline
    };
  }
});
</script>
