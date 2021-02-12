<template>
    <ion-input name="password" ref="pass" v-bind:type="inputType" :value="passwordValue" placeholder="Password" @ionChange="handleChange"></ion-input>
    <ion-icon @click="showHide()" class="showhide" v-if="!showPassword" :icon="eye"></ion-icon>
    <ion-icon @click="showHide()" class="showhide" v-if="showPassword" :icon="eyeOff"></ion-icon>
</template>

<script>
import { IonInput, IonIcon } from '@ionic/vue';
import { eyeOff, eye } from 'ionicons/icons';

export default({
  name: 'PasswordInput',
  components: { IonInput, IonIcon },
  emits: ["changed"],
  setup(){
    return { eyeOff, eye }
  },
  props: {
    showPass: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'password'
    },
    placeholder: {
      type: String,
      default: ""
    },
  },
  data: function(){
    return {
      showPassword: this.showPass,
      passwordValue: "",
      inputType: 'password'
    }
  },
  methods: {
    showHide(){
      this.showPassword = !this.showPassword;
      this.inputType = this.inputType == 'password' ? 'text' : 'password';
    },
    handleChange (ev) {
      this.passwordValue = this.$refs.pass.$el.value;
      this.$emit('changed', ev);
    }
  },
  computed: {
    value: {
      get: function(){
        return this.passwordValue;
      },
      set: function(newValue){
        this.passwordValue = newValue;
      }
    }
  }
})
</script>
<style scoped>
  ion-input+.showhide {
    position: absolute;
    right: 1.6rem;
    top: 1.2rem;
    font-size: 1.5rem;
    z-index: 1000;
    cursor: pointer;
  }
</style>
