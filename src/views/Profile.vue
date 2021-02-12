  <template>
  <ion-page>
    <ion-header class="ion-no-border">
      <TopToolbar title="PROFILE" />
    </ion-header>
    <ion-content>
      <ion-segment value="stats">
        <ion-segment-button value="stats" v-on:click="tabActive = 'stats'">
          <ion-label>Stats</ion-label>
        </ion-segment-button>
        <ion-segment-button value="mycases" v-on:click="tabActive = 'mycases'">
          <ion-label>My Cases</ion-label>
        </ion-segment-button>
      </ion-segment>
      <section class="stats" v-if="tabActive == 'stats'">
        <ProfileAvatar />
        <Stats :credibility="100" :honored="3" :totalcase="20" :win="2" :lost="4" />
        <ion-grid class="myfirm">
          <ion-row>
            <ion-col size="12" class="ion-text-start">
              <ion-text>My Firm</ion-text>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="6" v-for="item in friends" v-bind:key="item">
              <Friend checkable="false" :friend-name="item.name" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </section>
      <section class="mycases" v-if="tabActive == 'mycases'">
        <ion-list>
          <ion-item color="transparent" lines="none">
            <DebateItem :showStatus="true" status="CONTINUE" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :showStatus="true" status="SETTLED" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :showStatus="true" status="NOT SETTLED" />
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonLabel, IonItem, IonText,
         IonList, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton }
         from '@ionic/vue';
import TopToolbar from '@/components/TopToolbar.vue';
import { search } from 'ionicons/icons';
import DebateItem from '@/components/DebateItem.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import Stats from '@/components/Stats.vue';
import Friend from '@/components/Friend.vue';

export default {
  name: 'Profile',
  components: { IonPage, IonHeader, IonContent, IonLabel, IonItem, IonText,
                IonList, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton,
                TopToolbar, DebateItem, ProfileAvatar, Stats, Friend },
  data: function () {
        return {
            tabActive: 'stats',
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
            },
            {
              name: 'Jenny Wilson'
            },
            {
              name: 'Floyd Miles'
            }]
        }
  },
  setup() {
    return {
      search
    }
  },
}
</script>
<style scoped>
  ion-searchbar {
    border-radius: 1rem;
    box-shadow: 8px 8px 30px rgba(202, 212, 226, 0.08), -8px -8px 15px rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
    height: 3.5rem;
    text-align: left;
  }
  ion-segment {
    margin-bottom: 1rem;
  }
  ion-searchbar searchbar-input-container {
    --background: transparent;
    box-shadow: none;
  }
  ion-list {
    background: transparent;
  }
  .mycases ion-item, .mycases ion-list {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
  .myfirm ion-text {
    font-size: 1.2rem;
  }
</style>
