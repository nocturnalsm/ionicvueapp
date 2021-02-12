  <template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>INVITE TO CASE </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-searchbar></ion-searchbar>
      <hr>
      <section class="issues">
        <ion-list>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" :trending="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" :trending="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" :trending="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" />
          </ion-item>
          <ion-item color="transparent" lines="none">
            <DebateItem :invite="true" />
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button fill="clear">CANCEL</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button color="gradientblue" expand="block">INVITE</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonItem, IonBackButton,
          IonSearchbar } from '@ionic/vue';
import { search } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import DebateItem from '@/components/DebateItem.vue';

export default {
  name: 'InviteToCase',
  components: { IonPage, IonHeader, IonContent, IonItem, IonBackButton,
                IonSearchbar, DebateItem },
  data: function () {
        return {
            tabActive: 'friends'
        }
  },
  setup() {
    const router = useRouter();
    return {
      search, router
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
  ion-searchbar searchbar-input-container {
    --background: transparent;
    box-shadow: none;
  }
  ion-list {
    background: transparent;
  }
  .issues ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-end: 0;
  }
</style>
