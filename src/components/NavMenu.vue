<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons>
          <ion-button @click="closeMenu()">
            <ion-icon :icon="closeOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item color="transparent" lines="none" @click="openPricing()">
          <ion-icon :icon="star"></ion-icon>Pricing
        </ion-item>
        <ion-item color="transparent" lines="none" @click="openFriends()">
          <ion-icon :icon="peopleCircle"></ion-icon>Friends
        </ion-item>
        <ion-item color="transparent" lines="none" @click="openRecords()">
          <ion-icon :icon="pieChart"></ion-icon>Records
        </ion-item>
        <ion-item color="transparent" lines="none" @click="openSettings()">
          <ion-icon :icon="settings"></ion-icon>Settings
        </ion-item>
        <ion-item color="transparent" lines="none" @click="openReport()">
          <ion-icon :icon="alertCircle"></ion-icon>Report
        </ion-item>
        <ion-item color="transparent" lines="none" @click="openContact()">
          <ion-icon :icon="call"></ion-icon>Contact
        </ion-item>
        <ion-item color="transparent" @click="openHelp()" lines="none">
          <ion-icon :icon="helpCircle"></ion-icon>Help
        </ion-item>
        <ion-item color="transparent" @click="openAbout()" lines="none">
          <ion-icon :icon="informationCircle"></ion-icon>About
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-item color="transparent" lines="none" @click="doLogout()">
        <ion-icon :icon="exit"></ion-icon>Log out
      </ion-item>
    </ion-footer>
  </ion-menu>
</template>
<style scoped>
ion-item {
  cursor: pointer;
}
ion-header {
  margin-top: 1rem;
}
ion-list {
  background: transparent;
}
ion-header, ion-footer {
   background: transparent;
}
ion-toolbar ion-button {
  margin-left: 1.5rem;
}
ion-menu ion-item {
  color: rgba(var(--ion-text-color-rgb), 0.6);
}
ion-menu ion-item ion-icon {
  margin-right: 1rem;
}
ion-footer {
  box-shadow: none;
}
</style>
<script>
import { defineComponent } from "vue";
import { menuController, IonMenu, IonHeader, IonToolbar, IonButtons, IonButton,
         IonIcon, IonContent, IonList, IonItem, IonFooter } from '@ionic/vue';
import { star, exit, informationCircle, helpCircle, call,
         alertCircle, settings, pieChart, peopleCircle, closeOutline }
         from 'ionicons/icons';
import useFirebaseAuth from "../hooks/firebase-auth";
import { useRouter } from "vue-router"

export default {
  name: "NavMenu",
  components: {
           IonMenu, IonHeader, IonToolbar, IonButtons, IonButton,
           IonIcon, IonContent, IonList, IonItem, IonFooter
  },
  setup() {
    const { userData, logout } = useFirebaseAuth();
    const router = useRouter();

    const closeMenu = () => {
        menuController.close();
    }
    const doLogout = async () => {
      await logout();
      router.options.scrollBehavior;
      router.replace({ name: "login" });
      menuController.close();
    };
    const openPricing = () => {
      router.push({name: "pricing"});
      menuController.close();
    };
    const openFriends = () => {
      router.push({name: "friends"});
      menuController.close();
    };
    const openRecords = () => {
      router.push({name: "records"});
      menuController.close();
    };
    const openSettings = () => {
      router.push({name: "settings"});
      menuController.close();
    };
    const openReport = () => {
      router.push({name: "report-problem"});
      menuController.close();
    };
    const openContact = () => {
      router.push({name: "contact-us"});
      menuController.close();
    };
    const openHelp = () => {
      router.push({name: "help"});
      menuController.close();
    };
    const openAbout = () => {
      router.push({name: "about-us"});
      menuController.close();
    }
    return { openPricing, openRecords, openReport, openSettings, openContact,
           openHelp, openAbout, openFriends, star, exit,
           informationCircle, helpCircle, call,
           alertCircle, settings, pieChart, peopleCircle, closeOutline,
           closeMenu, doLogout
    }
  }
};
</script>
