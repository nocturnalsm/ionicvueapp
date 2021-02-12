  <template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="closeOutline" defaultHref="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>NEW POST</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-segment :value="issueName" @ionChange="segmentChanged($event)" v-if="stepValue == 1">
        <ion-segment-button value="debate">
          <ion-label>Debate</ion-label>
        </ion-segment-button>
        <ion-segment-button value="battle">
          <ion-label>Battle</ion-label>
        </ion-segment-button>
      </ion-segment>
      <section class="newissue" v-if="stepValue == 1">
        <ion-item color="transparent" lines="none">
          <ion-textarea rows="6" placeholder="What's the problem?"></ion-textarea>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-label slot="start">ATTACH MEDIA</ion-label>
          <ion-button slot="end" fill="clear">
            <ion-icon :icon="attachOutline" />
          </ion-button>
        </ion-item>
        <ion-item color="transparent" lines="none">
          <ion-label slot="start">
            <h3>PRIVATE CASE</h3>
            <small>Only invited people can see</small>
          </ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
      </section>
      <section class="battle-opponent" v-if="stepValue == 2 && issueName == 'battle'">
        <BattleOpponent />
      </section>
      <section class="battle-settings" v-if="stepValue == 3 && issueName == 'battle'">
        <BattleSettings />
      </section>
      <section class="battle-invite" v-if="stepValue == 4 && issueName == 'battle'">
        <BattleInvite />
      </section>
      <section class="debate-defendant" v-if="stepValue == 2 && issueName == 'debate'">
        <DebateDefendant />
      </section>
      <section class="debate-evidence" v-if="stepValue == 3 && issueName == 'debate'">
        <DebateEvidence />
      </section>
      <section class="debate-invite" v-if="stepValue == 4 && issueName == 'debate'">
        <DebateInviteFriend />
      </section>
      <section class="debate-judge" v-if="stepValue == 5 && issueName == 'debate'">
        <DebateJudge />
      </section>
    </ion-content>
    <ion-footer>
      <ion-progress-bar :value="progressValue"></ion-progress-bar>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-if="stepValue > 1">
            <ion-button fill="clear" @click="backStep()" expand="block">BACK</ion-button>
          </ion-col>
          <ion-col :size="stepValue == 1 ? 12 : 6" @click="nextStep()" v-if="showNextButton">
            <ion-button color="gradientblue" expand="block">NEXT</ion-button>
          </ion-col>
          <ion-col size="6" v-if="showFinalButton">
            <ion-button color="gradientblue" expand="block">{{ postButton }}</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonHeader, IonContent, IonLabel, IonItem, IonTextarea, IonSegment,
         IonSegmentButton, IonButton, IonIcon, IonBackButton, IonToggle, IonToolbar, 
         IonGrid, IonRow, IonCol, IonProgressBar, IonFooter, IonTitle, IonButtons } from '@ionic/vue';
import DebateDefendant from '@/views/Post/DebateDefendant.vue';
import DebateEvidence from '@/views/Post/DebateEvidence.vue';
import DebateInviteFriend from '@/views/Post/DebateInviteFriend.vue';
import DebateJudge from '@/views/Post/DebateJudge.vue';
import BattleOpponent from '@/views/Post/BattleOpponent.vue';
import BattleInvite from '@/views/Post/BattleInviteFriend.vue';
import BattleSettings from '@/views/Post/BattleSettings.vue';
import { closeOutline, attachOutline } from 'ionicons/icons'

export default defineComponent({
  name: 'NewIssue',
  components: { IonPage, IonHeader, IonContent, IonLabel, IonItem, IonTextarea, IonSegment,
                IonSegmentButton, IonButton, DebateDefendant, BattleOpponent, IonBackButton,
                IonToggle, IonToolbar,
                BattleSettings, BattleInvite, IonIcon, DebateEvidence, DebateInviteFriend, DebateJudge,
                IonGrid, IonRow, IonCol, IonProgressBar, IonFooter, IonTitle, IonButtons  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    issueType: {
      type: String,
      default: 'debate'
    }
  },
  data: function() {
    return {
      stepValue: this.step,
      issueName: this.issueType,
      postButton: this.issueType == 'debate' ? 'POST' : 'PUBLISH'
    }
  },
  methods: {
    nextStep() {
      this.stepValue += 1;
    },
    backStep() {
      this.stepValue -= 1;
    },
    segmentChanged(ev) {
      this.issueName = ev.detail.value;
    }
  },
  setup() {
    const router = useRouter();
    return {
      closeOutline, attachOutline
    }
  },
  computed: {
    showNextButton() {
      return (this.stepValue < 5 && this.issueName == 'debate') || (this.stepValue < 4 && this.issueName == 'battle')
    },
    showFinalButton() {
      return (this.stepValue == 5 && this.issueName == 'debate') || (this.stepValue == 4 && this.issueName == 'battle')
    },
    progressValue() {
      return this.stepValue / (this.issueName == 'debate' ? 5 : 4)
    }
  }
})
</script>
<style scoped>
  ion-segment {
    margin-bottom: 1rem;
  }
  ion-list {
    background: transparent;
  }
  ion-item {
    box-shadow: none;
    border: none;
    color: rgba(var(--ion-text-color-rgb), 0.6);
  }
  .newissue ion-item:first-child {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
  ion-item ion-icon {
    font-size: 1.8rem;
  }
  ion-item h3 {
    margin-bottom: -0.4rem;
  }
</style>
