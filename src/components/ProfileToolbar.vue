<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="/tabs/home"></ion-back-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon :icon="chatboxOutline"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon :icon="ellipsisVerticalOutline"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>
<script>
  import { IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon } from '@ionic/vue';
  import { chatboxOutline, ellipsisVerticalOutline } from 'ionicons/icons';

  export default {
    name: 'ProfileToolbar',
    components: { IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon },
    props: {
      friends: {
        type: Boolean,
        default: true
      }
    },
    setup() {
      return {
        chatboxOutline, ellipsisVerticalOutline
      }
    },
  }
</script>
