<template>
    <ion-card :class="'evidence-' + evidenceType">
      <ion-card-content>
         <ion-checkbox v-if="checkable == true"></ion-checkbox>
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-item color="transparent" lines="none">
                  <ion-chip>
                    <svg v-if="evidenceType == 'audio'" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.172 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6.828C16 6.298 15.789 5.789 15.414 5.414L10.586 0.586C10.211 0.211 9.702 0 9.172 0ZM10 11H9V14.893C9 15.889 8.319 16.813 7.336 16.973C6.083 17.176 5 16.215 5 15C5 13.895 5.895 13 7 13V10C7 9.448 7.448 9 8 9H10C10.552 9 11 9.448 11 10C11 10.552 10.552 11 10 11ZM9 7V1.5L14.5 7H9Z"/>
                    </svg>
                    <svg v-if="evidenceType == 'video'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <path d="M13.172 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8.828C20 8.298 19.789 7.789 19.414 7.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2ZM10 17.152V12.847C10 12.474 10.407 12.244 10.727 12.435L14.314 14.587C14.625 14.773 14.625 15.224 14.314 15.41L10.727 17.562C10.407 17.756 10 17.525 10 17.152ZM13 9V3.5L18.5 9H13Z"/>
                    </g>
                    </svg>
                    <svg v-if="evidenceType == 'link'" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H7.10156C7.03556 19.674 7 19.34 7 19C7 17.663 7.52084 16.4069 8.46484 15.4629L13.4648 10.4629C14.1838 9.74389 15.071 9.29347 16 9.10547V6.82812C16 6.29813 15.7891 5.78906 15.4141 5.41406L10.5859 0.585938C10.2109 0.210938 9.70187 0 9.17188 0H2ZM9 1.5L14.5 7H10C9.448 7 9 6.552 9 6V1.5ZM17.1836 11.0059C16.9395 10.9913 16.6887 11.0053 16.4375 11.0508C15.8115 11.1638 15.2508 11.507 14.8008 11.957L14.1699 12.5879C13.7799 12.9779 13.7799 13.612 14.1699 14.002C14.5599 14.392 15.192 14.392 15.582 14.002L16.293 13.293C16.482 13.104 16.732 13 17 13C17.267 13 17.518 13.104 17.707 13.293C18.086 13.671 18.085 14.329 17.707 14.707L16.998 15.416C16.608 15.806 16.608 16.4401 16.998 16.8301C17.388 17.2201 18.0221 17.2201 18.4121 16.8301L19.043 16.1992C19.493 15.7502 19.8352 15.1895 19.9492 14.5645C20.1312 13.5595 19.8201 12.5759 19.1211 11.8789C18.5976 11.3554 17.9159 11.0495 17.1836 11.0059ZM15 15C14.744 15 14.488 15.098 14.293 15.293L13.293 16.293C12.903 16.683 12.903 17.317 13.293 17.707C13.683 18.097 14.317 18.097 14.707 17.707L15.707 16.707C16.098 16.316 16.098 15.683 15.707 15.293C15.512 15.098 15.256 15 15 15ZM11.2949 15.877C11.0389 15.877 10.7829 15.9749 10.5879 16.1699L9.95703 16.8008C9.50803 17.2498 9.16378 17.8115 9.05078 18.4375C8.86878 19.4425 9.18091 20.4231 9.87891 21.1211C10.5769 21.8201 11.5605 22.1312 12.5645 21.9492C13.1895 21.8352 13.7502 21.493 14.1992 21.043L14.8301 20.4121C15.2201 20.0221 15.2201 19.388 14.8301 18.998C14.4401 18.608 13.806 18.608 13.416 18.998L12.707 19.707C12.329 20.085 11.671 20.086 11.293 19.707C11.104 19.518 11 19.267 11 19C11 18.732 11.104 18.482 11.293 18.293L12.002 17.582C12.392 17.192 12.392 16.5599 12.002 16.1699C11.807 15.9749 11.5509 15.877 11.2949 15.877Z"/>
                    </svg>
                  </ion-chip>
                  <ion-label>{{ name }}</ion-label>
                </ion-item>
              </ion-col>
              <ion-col size="8" class="ion-align-self-end">
                <a>Preview Evidence</a>
              </ion-col>
              <ion-col size="4" class="ion-align-self-end">
                <h2 class="ion-text-capitalize">{{ evidenceType }}</h2>
                <h4>Evidence Type</h4>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonGrid, IonRow, IonItem, IonCol, IonLabel, IonChip, IonCheckbox } from '@ionic/vue';
import { defineComponent, ref } from "vue";

export default defineComponent ({
  name: 'EvidenceItem',
  components: {  IonCard, IonCardContent, IonGrid, IonRow,
                 IonItem, IonCol, IonLabel, IonChip, IonCheckbox },
  props: {
    evidenceType: {
      type: String
    },
    name: {
      type: String
    },
    checkable: {
      type: Boolean,
      default: true
    }
  }
});
</script>
<style scoped>
  ion-card {
    background: #1D1E22;
    border-radius: 14px;
    text-align: left;
  }
  ion-card ion-item {
    --padding-start: 0;
  }
  ion-card-content {
    padding-top: 0.8;
    min-height: 5rem;
  }
  ion-chip {
    display: inline;
    border-radius: 5px;
    padding:0;
    margin-right: 0.6rem !important;
    height: 3rem;
    width: 3rem;
  }
  ion-chip svg {
    padding-top: 0.6rem;
    padding-left: 0.6rem;
    fill: rgba(var(--ion-text-color-rgb), 0.6);
    width: 2.4rem;
    height:2.4rem;
  }
  ion-checkbox {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    height: 1.6rem;
    width: 1.6rem;
  }
  ion-card h4 {
    font-size: 0.8rem;
  }
</style>
