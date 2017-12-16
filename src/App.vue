<template>
<div>
  <app-navbar></app-navbar>
  <app-login></app-login>
  <app-footer></app-footer>
</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./components/Report.vue";
import Footer from "./components/Footer.vue";
export default {
    components: {
      "app-navbar" : Navbar,
      "app-login" : Login,
      "app-footer" : Footer
    },
    data() {
      return {};
    }
  }
</script>

<style>
</style>
