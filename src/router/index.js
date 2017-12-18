import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Report from '@/components/Report'
import Datos from "@/components/Datos.vue";
import RMiembros from "@/components/RMiembros.vue";
import Extiende from "@/components/Extiende.vue";
import Metas from "@/components/Metas.vue";
import Home from "@/components/Home.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:'Login', component:Login },
    { path: '/Home', name:'Home', component:Home },
    { path: '/Report', name:'Report', component:Report },
    { path: '/Datos', name:'Datos', component:Datos },
    { path: '/RMiembros', name:'RMiembros', component:RMiembros },
    { path: '/Extiende', name:'Extiende', component:Extiende },
    { path: '/Metas', name:'Metas', component:Metas }
  ],
  mode:'history'
})
