import Vue from 'vue'
import LoginPage from "../pages/LoginPage"
import Gracias from "../pages/menuPages/Gracias"
import UserData from "../pages/UserData"
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
      path: "/login",
      name: "login_page",
      component: LoginPage,
    },
    {
      path: "/data",
      name: "data_page",
      component: UserData,
    },
  ]
})