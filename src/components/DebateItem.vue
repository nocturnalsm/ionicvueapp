<template>
  <ion-card>
    <ion-card-content>
      <ion-item class="profile" color="transparent" lines="none">
        <ion-avatar></ion-avatar>
        <ion-label>
          <h3>Darrel Steward</h3>
          <small class="subtitle">2 minutes ago</small>
        </ion-label>
        <ion-label v-if="trending" class="trending ion-text-end" slot="end">
          <ion-icon src="/assets/icon/lightning.svg"></ion-icon>
        </ion-label>
      </ion-item>
      <ion-item class="title" color="transparent" lines="none">
        <ion-label>
          <p>What should I expect of a woman if she expect chivalry ?</p>
        </ion-label>
      </ion-item>
      <ion-item v-if="toolbar" class="toolbar" color="transparent" lines="none">
        <ion-grid>
          <ion-row>
            <ion-col class="subtitle ion-align-self-center">+16 people has joined the case</ion-col>
            <ion-col v-if="private" class="ion-text-right">
              <ion-label class="label-private">Private Case <ion-icon :icon="lockClosed" /></ion-label>
            </ion-col>
            <ion-col v-else>
              <ion-button v-if="join" expand="block" @click="joinIssue()" class="join-button" size="large" color="gradientblue">JOIN</ion-button>
              <ion-button v-if="invite" expand="block" @click="inviteIssue()" class="invite-button" size="large" color="gradientblue">INVITE</ion-button>
            </ion-col>
            <ion-label class="status" :class="{'continue': status == 'CONTINUE', 'settled': status == 'SETTLED', 'notsettled': status == 'NOT SETTLED'}" v-if="showStatus">{{ status }}</ion-label>
          </ion-row>
        </ion-grid>
      </ion-item>
      <ion-item v-if="stats" class="stats" color="transparent" lines="none">
        <ion-grid>
          <ion-row>
            <ion-col class="like ion-justify-content-between">
                <ion-icon :icon="heartOutline"></ion-icon>
                <ion-label>1,623</ion-label>
            </ion-col>
            <ion-col class="dislike ion-justify-content-center">
                <ion-icon :icon="heartDislikeOutline"></ion-icon>
                <ion-label>322</ion-label>
            </ion-col>
            <ion-col class="chat ion-justify-content-center">
                <ion-icon :icon="chatboxOutline"></ion-icon>
                <ion-label>123</ion-label>
            </ion-col>
            <ion-col v-if="disputable" class="dispute ion-justify-content-center">
                <ion-icon src="/assets/icon/discussion.svg"></ion-icon>
                <ion-label>DISPUTE</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>
<script>
  import { defineComponent } from "vue";
  import { useRouter } from 'vue-router';
  import { heartOutline, heartDislikeOutline, chatboxOutline, lockClosed } from 'ionicons/icons';
  import { IonCard, IonCardContent, IonItem, IonLabel, IonAvatar, IonIcon,
           IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

  export default defineComponent ({
    name: 'DebateItem',
    props: {
      toolbar: {
        type: Boolean,
        default: true
      },
      join: {
        type: Boolean,
        default: false
      },
      invite: {
        type: Boolean,
        default: false
      },
      stats: {
        type: Boolean,
        default: false
      },
      disputable: {
        type: Boolean,
        default: false
      },
      trending: {
        type: Boolean,
        default: false
      },
      showStatus: {
        type: Boolean,
        default: false
      },
      status: {
        type: String,
        default: "CONTINUE"
      },
      private: {
        type: Boolean,
        default: false
      }
    },
    components: {  IonCard,
                   IonCardContent,
                   IonItem,
                   IonLabel,
                   IonAvatar,
                   IonIcon, IonButton,
                   IonGrid, IonRow, IonCol
    },
    setup(){
      const router = useRouter();
      const joinIssue = () => {
        router.push({name:"issue"});
      };
      const inviteIssue = () => {
        router.push({name: 'invite-to-case'})
      }
      return { heartOutline, heartDislikeOutline, chatboxOutline, joinIssue, inviteIssue, lockClosed };
    }
  });
</script>
<style scoped>
ion-card {
  background: linear-gradient(117.39deg, #22272E -42.32%, #0C0D10 148.78%);
  border-radius: 12px;
}
ion-card-content {
  padding: 1rem 0 1rem 0;
}
ion-card p {
  font-size: 0.9rem;
  white-space: initial;
  text-overflow: initial;
  line-height: 1rem;
}
.subtitle {
  font-size: 0.8rem;
  opacity: 0.4;
  line-height: 1.2rem !important;
}
small {
  font-size: 0.8rem;
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
ion-item {
  color: rgba(var(--ion-text-color-rgb), 0.6);
  --inner-padding-end: 1rem;
}
.join-button {
  font-size: 1rem;
}
ion-button.join-button {
  min-width: 8rem !important;
}
.stats ion-icon {
  font-size: 1.5rem;
  width: 100%;
}
.stats ion-label {
  font-size: 0.8rem;
  text-align: center !important;
}
.stats ion-label {
  display: block;
}
.trending ion-icon {
  width: 1rem;
  height: 0.8rem;
}
.status {
  font-size: 1rem;
}
.status.continue {
  color: #38B7FF;
}
.status.settled {
  color: #4CAF50;
}
.status.notsettled {
  color: #ED1146;
}
.label-private {
  font-size: 1rem;
}
</style>
