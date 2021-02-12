<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home" :icon="chevronBackOutline"></ion-back-button>
        </ion-buttons>
        <ion-title>CASE</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2 4.00008C10.0808 3.99846 9.96243 4.02055 9.85182 4.06505C9.74121 4.10955 9.64054 4.17559 9.55566 4.25932C9.47078 4.34306 9.40339 4.44282 9.35739 4.55282C9.31139 4.66281 9.2877 4.78085 9.28769 4.90008H4.8C3.8055 4.90008 3 5.70558 3 6.70008V12.1001C3 13.0928 3.8073 13.9001 4.8 13.9001H19.2C20.1927 13.9001 21 13.0928 21 12.1001V6.70008C21 5.70558 20.1945 4.90008 19.2 4.90008H14.7123C14.7123 4.78085 14.6886 4.66281 14.6426 4.55282C14.5966 4.44282 14.5292 4.34306 14.4443 4.25932C14.3595 4.17559 14.2588 4.10955 14.1482 4.06505C14.0376 4.02055 13.9192 3.99846 13.8 4.00008H10.2ZM12 10.3001C12.4968 10.3001 12.9 10.7033 12.9 11.2001C12.9 11.6969 12.4968 12.1001 12 12.1001C11.5032 12.1001 11.1 11.6969 11.1 11.2001C11.1 10.7033 11.5032 10.3001 12 10.3001ZM3 15.1991V17.5001C3 18.4946 3.8055 19.3001 4.8 19.3001H19.2C20.1945 19.3001 21 18.4946 21 17.5001V15.1991C20.4681 15.5087 19.8588 15.7001 19.2 15.7001H4.8C4.1412 15.7001 3.5319 15.5087 3 15.1991Z" fill="#7A8189"/>
            </svg>
          </ion-button>
          <ion-button @click="inviteFriend()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7143 3C9.80497 3 8.9329 3.36122 8.28992 4.00421C7.64694 4.64719 7.28571 5.51926 7.28571 6.42857C7.28571 7.33789 7.64694 8.20996 8.28992 8.85294C8.9329 9.49592 9.80497 9.85714 10.7143 9.85714C11.6236 9.85714 12.4957 9.49592 13.1387 8.85294C13.7816 8.20996 14.1429 7.33789 14.1429 6.42857C14.1429 5.51926 13.7816 4.64719 13.1387 4.00421C12.4957 3.36122 11.6236 3 10.7143 3ZM15.8571 10.7143C13.0286 10.7143 10.7143 13.0286 10.7143 15.8571C10.7143 18.6857 13.0286 21 15.8571 21C18.6857 21 21 18.6857 21 15.8571C21 13.0286 18.6857 10.7143 15.8571 10.7143ZM9.90067 12.4688C7.1921 12.6933 3 13.968 3 16.2857V18.4286H9.50391C9.18162 17.634 9 16.7674 9 15.8571C9 14.6229 9.32981 13.469 9.90067 12.4688ZM15.8571 13.2857C16.3303 13.2857 16.7143 13.6697 16.7143 14.1429V15H17.5714C18.0446 15 18.4286 15.384 18.4286 15.8571C18.4286 16.3303 18.0446 16.7143 17.5714 16.7143H16.7143V17.5714C16.7143 18.0446 16.3303 18.4286 15.8571 18.4286C15.384 18.4286 15 18.0446 15 17.5714V16.7143H14.1429C13.6697 16.7143 13.2857 16.3303 13.2857 15.8571C13.2857 15.384 13.6697 15 14.1429 15H15V14.1429C15 13.6697 15.384 13.2857 15.8571 13.2857Z" fill="#7A8189"/>
            </svg>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-segment value="overview">
        <ion-segment-button value="overview" v-on:click="tabActive = 'overview'">Overview</ion-segment-button>
        <ion-segment-button value="debate" v-on:click="tabActive = 'debate'">Debate</ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content class="overview" v-show="tabActive == 'overview'">
      <section class="debate">
        <DebateItem :private="true" />
      </section>
      <section class="battle">
        <BattleItem :show-judge="true" :show-position="true" :show-toolbar="true" />
      </section>
      <section class="settlement" v-if="private == false">
        <h2 class="collapseTitle"><a @click="collapse('settlement')"><ion-icon :icon="removeOutline"></ion-icon></a> Settlement Request</h2>
        <ion-list :class="{'ion-hide': isCollapsed.settlement == false }">
          <ion-item class="ion-padding-start">
              <ion-label class="ion-padding-start"><span class="pln">PLN</span>: Concert Ticket</ion-label>
          </ion-item>
          <ion-item>
              <ion-label class="ion-padding-start"><span class="dfn">DFN</span>: PS5 Game</ion-label>
          </ion-item>
        </ion-list>
      </section>
      <section class="evidence">
        <h2 class="collapseTitle"><a @click="collapse('evidence')"><ion-icon :icon="removeOutline"></ion-icon></a> Evidence</h2>
        <ion-list :class="{'ion-hide': isCollapsed.evidence == false }">
          <ion-item v-for="item in evidences" v-bind:key="item" color="transparent" lines="none">
            <EvidenceItem :evidence-type="item.type" :name="item.name" />
          </ion-item>
        </ion-list>
      </section>
      <section class="jury">
        <h2 class="collapseTitle"><a @click="collapse('jury')"><ion-icon :icon="removeOutline"></ion-icon></a> Jury</h2>
        <ion-slides class="ion-padding-start" :class="{'ion-hide': isCollapsed.jury == false }" :options="slideOpts">
          <ion-slide v-for="item in friends" v-bind:key="item">
            <Friend :checkable="false" :friend-name="item.name" />
          </ion-slide>
        </ion-slides>
      </section>
    </ion-content>
    <ion-content ref="debate" v-show="tabActive == 'debate'">
      <ion-grid class="ion-no-padding">
          <IssueItem v-for="item in items" :posType="item.posType" :system="item.system" :message="item.message" v-bind:key="item" />
      </ion-grid>
    </ion-content>
    <ion-footer v-show="tabActive == 'debate' && showDebateFooter == true">
      <IssueFooter @message="sendMessage" :locked="false" />
    </ion-footer>
  </ion-page>
</template>
<script>
import { useRouter } from 'vue-router';
import Vue from 'vue';
import { IonPage, IonHeader, IonContent, IonItem, IonToolbar, IonButtons, IonButton,
         IonLabel, IonGrid, IonFooter, IonIcon, IonTitle,
         IonSegment, IonSegmentButton, IonList, IonBackButton, IonSlides, IonSlide } from '@ionic/vue';
import { chevronBackOutline, removeOutline } from 'ionicons/icons';
import EvidenceItem from '@/components/EvidenceItem.vue';
import DebateItem from '@/components/DebateItem.vue';
import BattleItem from '@/components/BattleItem.vue';
import Friend from '@/components/Friend.vue';
import IssueItem from '@/views/Debate/IssueItem.vue';
import IssueFooter from '@/views/Debate/IssueFooter.vue';

export default {
  name: 'Issue',
  components: { IonPage, IonHeader, IonContent, IonItem, IonToolbar, IonButtons, IonButton,
                IonSegment, IonSegmentButton, IonList, IonBackButton, IonSlides, IonSlide,
                IonLabel, IonGrid, IonFooter, IonIcon, IonTitle,
                DebateItem, BattleItem, EvidenceItem, Friend, IssueItem, IssueFooter },
  data: function () {
        return {
            tabActive: 'overview',
            showDebateFooter: true,
            private: false,
            isCollapsed: {
              evidence: true,
              jury: true,
              settlement: true
            },
            items: [{
                      posType: 'pln', system: false, message: "This is a message"
                    },
                    {
                      posType: 'dfn', system: false, message: "This is a message"
                    },
                    {
                      posType: 'judge', system: false, message: "This is a message"
                    },
                    {
                      posType: 'jury', system: false, message: "This is a message"
                    },
                    {
                      system: true
                    },
            ],
            friends: [{
              name: 'Darlene Robertson'
            },
            {
              name: 'Darrel Steward'
            },
            {
              name: 'Kevin McKinney'
            },
            {
              name: 'Howard Hughes'
            }],
            evidences: [
              {
                  name: 'Evidence 01',
                  type: 'audio'
              },
              {
                  name: 'Evidence 02',
                  type: 'video'
              },
              {
                  name: 'Evidence 03',
                  type: 'link'
              }
            ]
        }
  },
  methods: {
    collapse(item) {
      this.isCollapsed[item] = !this.isCollapsed[item];
    },
    sendMessage(value){
      this.items.push({ posType: 'pln', message: value, system: false });
      this.$refs.debate.$el.scrollToBottom();
    }
  },
  setup() {
    const router = useRouter();
    const slideOpts = {
      slidesPerView: 3,
    };
    const inviteFriend = function(){
      router.push({name: 'invite-friend'});
    };
    return {
      inviteFriend, slideOpts, removeOutline, chevronBackOutline
    };
  }
}
</script>
<style scoped>
  h2 {
    font-size: 1.1rem;
    text-align: left;
    margin-left: 1rem;
  }
  ion-list {
    background: transparent;
  }
  ion-footer {
    padding-top: 0.5rem;
  }
  ion-list ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
  .settlement ion-item {
    padding: 0 1rem 0 1rem;
    margin-bottom: 0.5rem;
    --border-radius: 1rem;
  }
  ion-slide {
    background: transparent;
    padding: 0 !important;
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
    margin-right: 0.5rem;
  }
  .collapseTitle {
    margin-left: 0;
  }

</style>
