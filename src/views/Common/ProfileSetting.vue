<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="chevronBackOutline" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>EDIT PROFILE</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" class="justify-content-items-center">
            <div class="circle">
            </div>
          </ion-col>
          <ion-col size="12">
            <a>New Image</a>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-start">
          <ion-col size="12">
              <ion-input required name="fullname" type="text" placeholder="Full Name" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-input required name="username" type="text" placeholder="Username" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-input required name="email" type="email" placeholder="Email" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-datetime placeholder="Date of Birth" name="dob" display-format="YYYY-MMMM-DD"></ion-datetime>
          </ion-col>
          <ion-col size="12">
              <ion-select interface="popover" name="gender" placeholder="Gender">
                <ion-select-option value="male">Male</ion-select-option>
                <ion-select-option value="female">Female</ion-select-option>
              </ion-select>
          </ion-col>
          <ion-col size="12">
              <ion-input name="zipcode" type="number" placeholder="Zip Code" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-input name="password" type="password" placeholder="Old Password" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-input name="password" type="password" placeholder="New Password" @ionChange="handleChange"></ion-input>
          </ion-col>
          <ion-col size="12">
              <ion-input name="c_password" type="password" placeholder="Confirm New Password" @ionChange="handleChange"></ion-input>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button fill="clear">CANCEL</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button :disabled="isLoading" class="auth-button" color="gradientblue" @click="savePassword()">
              <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
              {{ !isLoading ? "SAVE" : "" }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
    <ion-toast></ion-toast>
  </ion-page>
</template>

<script lang="ts">
import useFirebaseAuth from "../../hooks/firebase-auth";
import { defineComponent, ref } from "vue";

import {
  IonToolbar,
  IonInput,
  IonPage,
  IonButton, IonBackButton,
  IonGrid, IonRow, IonCol, IonButtons,
  IonSpinner, IonToast
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { lockClosed, chevronBackOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'ProfileSetting',
  components: {
    IonToolbar,
    IonInput,
    IonPage,
    IonButton, IonBackButton,
    IonGrid, IonRow, IonCol, IonButtons,
    IonSpinner, IonToast
  },

  setup() {
    const state = useFirebaseAuth();
    const router = useRouter();

    const login = () => {
      router.push({name : "login" });
    };
    const savePassword = () => {
      router.push({name : "resetsuccess" });
    };
    const handleChange = (e: CustomEvent) => {
      console.log(e);
      const name: string = (e?.target as any)?.name;
    };

  return {
      ...state,
      login,
      savePassword,
      handleChange,
      lockClosed, chevronBackOutline
    };
  },
});
</script>

<style scoped>
    ion-item {
      --padding-start: 0px;
      --padding-end: 0px;
    }
    ion-grid ion-img {
      margin-bottom: 1rem;
      margin-top: 1rem;
      height: 8.5rem !important;
      width: auto !important;
      align-items: center;
    }
    .circle {
      border-radius: 50%;
      margin: 0 auto;
      width: 8.2rem;
      height: 8.2rem;
      background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
      box-shadow: -0.5px 0.5px 0px rgba(202, 212, 226, 0.05), 0.5px -0.5px 0px rgba(0, 0, 0, 0.2), -10px -10px 30px rgba(202, 212, 226, 0.1), 10px 10px 30px rgba(0, 0, 0, 0.4);
    }
    .circle ion-icon {
      margin-top: 25%;
      font-size: 4.2rem;
    }
    ion-footer ion-button {
      width: 10rem;
    }
    ion-select, ion-datetime {
      text-align: left;
      color: rgba(var(--ion-text-color-rgb), 0.6);
      border-radius: 1rem;
      height: 3.5rem;
      box-shadow: 0.5rem 0.5rem 2rem rgba(202, 212, 226, 0.08), -0.5rem -0.5rem 1rem rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
    }
    ion-datetime {
      padding-top: 1rem;
    }
    ion-footer {
      background: linear-gradient(169.56deg, #20252D -1.13%, #0C0D10 153.75%);
      box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.1), -10px -10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 2rem 2rem 0 0;
    }
</style>
