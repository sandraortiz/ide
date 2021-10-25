import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import './styles/main.styl'
import vueCountryRegionSelect from 'vue-country-region-select'
import axios from 'axios'
import VueAgile from "vue-agile"
Vue.use(VueAgile)
import VueMeta from 'vue-meta'
Vue.config.productionTip = false;

import excel from 'vue-excel-export'
 
Vue.use(excel)


import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBOTcZL3g_TS3aZ-JtbPuMw7WJEivPW0i8",
  authDomain: "vue-firebase-test-7404a.firebaseapp.com",
  projectId: "vue-firebase-test-7404a",
  storageBucket: "vue-firebase-test-7404a.appspot.com",
  messagingSenderId: "240431790898",
  appId: "1:240431790898:web:9177b6136423434ef6752b",
  measurementId: "G-RMVYFT7QCS"
}
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()
export { auth , db }




Vue.use(vueCountryRegionSelect)
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false


Vue.use(VueMeta  )

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


