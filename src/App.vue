<template>
<div>
  <app-navbar v-if="$route.path != '/'"></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
export default {
    data() {
      return {};
    }
  }
</script>

<style>
</style>
