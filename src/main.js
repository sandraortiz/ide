import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import './styles/main.styl'
import vueCountryRegionSelect from 'vue-country-region-select'
import axios from 'axios'
Vue.use(vueCountryRegionSelect)
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false
import VueMeta from 'vue-meta'

Vue.use(VueMeta  )

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


