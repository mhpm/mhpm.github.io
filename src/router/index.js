import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Report from '@/components/Report'
import Datos from "@/components/Datos.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:'Login', component:Login },
    { path: '/Report', name:'Report', component:Report },
    { path: '/Datos', name:'Datos', component:Datos }
  ],
  mode:'history'
})
