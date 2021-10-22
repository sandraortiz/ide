import Vue from 'vue'

import AdministrationPage from "../pages/AdministrationPage"

import Gracias from "../pages/menuPages/Gracias"

import HomeView from "../views/HomeView"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes : [
    {
      path: "/gracias",
      name: "gracias",
      component: Gracias
    },
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
   
    {
      path: "/administracion",
      name: "administracion_page",
      component: AdministrationPage,
    },
  ]
})