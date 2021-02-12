<template>
  <ion-page>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="newIssue()" color="gradientblue">
            <ion-icon :icon="addOutline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button id="tab-trending" tab="trending" href="/tabs/trending">
          <ion-icon :icon="flameOutline" />
        </ion-tab-button>

        <div class="fab-wrapper"></div>
        <ion-tab-button id="tab-messages" tab="messages" href="/tabs/messages">
          <ion-icon :icon="chatboxOutline" />
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="personOutline" />
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonFab, IonFabButton } from '@ionic/vue';
import { flameOutline, chatboxOutline, personOutline, homeOutline, addOutline } from 'ionicons/icons';
import { useRouter } from "vue-router";

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonFab, IonFabButton },
  setup() {
    const router = useRouter();
    const newIssue = () => {
      router.push({name: 'new-issue'});
    };
    return {
      homeOutline, flameOutline, chatboxOutline, personOutline, addOutline, newIssue
    }
  }
}
</script>
<style scoped>
  ion-header {
    background: transparent;
  }
  ion-tabs {
    height: 6.5rem;
  }
  ion-tab-bar {
    background: linear-gradient(135deg, #0C0D10 0%, #20252D 100%);
    box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.2), -10px -10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    height: 5.5rem;
    contain: none;
  }
  ion-tab-button {
    background: linear-gradient(135deg, #0C0D10 0%, #20252D 100%);
    box-shadow: 4px 4px 15px rgba(202, 212, 226, 0.08), -4px -4px 15px rgba(0, 0, 0, 0.4), 0.5px -1px 0px rgba(255, 255, 255, 0.08), -0.5px 0.5px 0px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    height: 3.5rem;
    max-width: 3.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
	ion-tab-bar ion-tab-button {
			--background: var(--ion-color-light);
  }
  ion-tab-button ion-icon {
      font-size: 1.5rem;
  }
  .fab-wrapper {
      background: linear-gradient(135deg, #0C0D10 0%, #21242c 100%);
			width: 6.1rem;
      height: 3rem;
      margin-left: 0.6rem;
      margin-right: 0.25rem;
      border-top-left-radius: 4rem;
      border-top-right-radius: 4rem;
      margin-bottom: 8.5rem;
      box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.2), -10px -10px 30px rgba(0, 0, 0, 0.25);
	}
  #tab-trending {
      margin-right: 1rem;
  }
  #tab-messages {
      margin-left: 1rem;
  }
  ion-fab-button {
      margin-bottom: 2.6rem;
      width: 4.4rem;
      height: 4.4rem;
  }
</style>
