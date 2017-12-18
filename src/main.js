// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// ImportingGlobal Components
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
