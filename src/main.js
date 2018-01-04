// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.config.productionTip = false

// Firebase Config and init
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBxlRYB7OidiGaIAiIaIkNhjM-nUB5PQwE",
  authDomain: "rcm-manager.firebaseapp.com",
  databaseURL: "https://rcm-manager.firebaseio.com",
  projectId: "rcm-manager",
  storageBucket: "rcm-manager.appspot.com",
  messagingSenderId: "456447116065"
};
firebase.initializeApp(config)
// end Firebase

// ImportingGlobal Components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
