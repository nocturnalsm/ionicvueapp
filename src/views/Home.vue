  <template>
  <ion-page>
    <ion-header class="ion-no-border">
      <TopToolbar title="HOME" />
    </ion-header>
    <ion-content>
      <ion-item color="transparent" lines="none">
        <ion-label id="credibility-label" slot="start">Credibility</ion-label>
        <ion-label class="credibility ion-text-end" slot="end">90%</ion-label>
      </ion-item>
      <ion-searchbar></ion-searchbar>
      <hr>
    <section class="friends">
      <ion-item class="ion-no-padding" color="transparent" lines="none">
        <ion-label slot="start"><a @click="collapse('friends')"><ion-icon :icon="removeOutline"></ion-icon></a> Friends</ion-label>
        <ion-label class="ion-text-end">
          <a class="ion-text-end" @click="seeFriends()">SEE ALL</a>
        </ion-label>
      </ion-item>
      <ion-slides :class="{'ion-hide': isCollapsed.friends == false }" :options="slideOpts">
        <ion-slide v-for="item in friends" v-bind:key="item">
          <Friend :checkable="false" :friend-name="item.name" />
        </ion-slide>
      </ion-slides>
    </section>
    <section class="categories">
       <ion-item class="ion-no-padding" color="transparent" lines="none">
         <ion-label slot="start"><a @click="collapse('categories')"><ion-icon :icon="removeOutline"></ion-icon></a> Categories</ion-label>
       </ion-item>
       <ion-list :class="{'ion-hide': isCollapsed.categories == false }">
          <ion-item color="transparent" lines="none" class="category">
            <ion-chip>
              <ion-icon class="custom" src="/assets/icon/counseling.svg" />
              <ion-label>Couple Counseling</ion-label>
            </ion-chip>
          </ion-item>
          <ion-item color="transparent" lines="none" class="category">
            <ion-chip>
              <ion-icon class="custom" src="/assets/icon/negotiations.svg" />
              <ion-label>Peace Negotiations</ion-label>
            </ion-chip>
          </ion-item>
          <ion-item color="transparent" lines="none" class="category">
            <ion-chip>
              <ion-icon class="custom" src="/assets/icon/damages.svg" />
              <ion-label>Damages and Reviews</ion-label>
            </ion-chip>
          </ion-item>
          <ion-item color="transparent" lines="none" class="category">
            <ion-chip>
              <ion-icon :icon="search" />
              <ion-label>Couple Counseling</ion-label>
            </ion-chip>
          </ion-item>
      </ion-list>
      </section>
      <section class="issues">
        <ion-segment value="friends">
          <ion-segment-button value="friends" @click="tabActive = 'friends'">
            <ion-label>Friends Cases</ion-label>
          </ion-segment-button>
          <ion-segment-button value="trendy" @click="tabActive = 'trendy'">
            <ion-label>Trendy Cases</ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-list id="friends-cases" v-if="tabActive == 'friends'" color="transparent">
          <ion-item @click="openIssue()" color="transparent" lines="none">
            <DebateItem :join=true />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :toolbar=false :stats=true :join=false :disputable="true" />
          </ion-item>
        </ion-list>
        <ion-list id="trending-cases" v-if="tabActive == 'trendy'" color="transparent">
          <ion-item color="transparent" lines="none">
            <DebateItem :join="true" :trending="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :toolbar=false :stats=true :join=false :disputable="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <BattleItem :show-judge="true" :show-position="true" :show-toolbar="true"/>
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonSlides, IonSlide, IonLabel, IonItem,
          IonSearchbar, IonSegment, IonSegmentButton, IonList, IonChip, IonIcon } from '@ionic/vue';
import TopToolbar from '@/components/TopToolbar.vue';
import { useRouter } from 'vue-router';
import { search, removeOutline } from 'ionicons/icons';
import DebateItem from '@/components/DebateItem.vue';
import BattleItem from '@/components/BattleItem.vue';
import Friend from '@/components/Friend.vue';

export default {
  name: 'Home',
  components: { IonPage, IonHeader, IonContent, IonSlides, IonSlide, IonLabel, IonItem,
              IonSearchbar, TopToolbar, DebateItem, BattleItem, Friend,
              IonSegment, IonSegmentButton, IonList, IonChip, IonIcon },
  data: function () {
        return {
            tabActive: 'friends',
            isCollapsed: {
              categories: true,
              friends: true
            },
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
            }]
        }
  },
  methods: {
    collapse: function(item){
      this.isCollapsed[item] = !this.isCollapsed[item];
    }
  },
  setup() {
    const slideOpts = {
      slidesPerView: 3,
    };
    const router = useRouter();
    const seeFriends = function(){
      router.push({name: 'friends'});
    };
    const openIssue = function(){
      router.push({name: 'issue'});
    };
    return {
      slideOpts, router,
      search, removeOutline, seeFriends, openIssue
    }
  },
}
</script>
<style scoped>
  #credibility-label {
    font-size: 0.9rem;
    opacity: 0.6;
  }
  ion-searchbar {
    border-radius: 1rem;
    box-shadow: 8px 8px 30px rgba(202, 212, 226, 0.08), -8px -8px 15px rgba(0, 0, 0, 0.25), 1px -1px 0px rgba(202, 212, 226, 0.07), -1px 1px 0px rgba(0, 0, 0, 0.2);
    height: 3.5rem;
    text-align: left;
  }
  ion-searchbar searchbar-input-container {
    --background: transparent;
    box-shadow: none;
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
  ion-list {
    background: transparent;
  }
  .category svg {
    height: 2rem !important;
    width: 2rem !important;
  }
  .category ion-chip {
    width: 100%;
    height: 3.1rem;
  }
  ion-item.category {
    --padding-start: 0;
    --inner-padding-end: 0;
  }
  .category ion-label {
    opacity: 0.6;
  }
  ion-icon {
    color: rgba(var(--ion-text-color-rgb), 0.4);
    width: 2.5rem !important;
  }
  ion-icon.custom {
    height: 2.5rem !important;
  }
  .issues ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
  ion-card {
    width: 100%;
  }
</style>
