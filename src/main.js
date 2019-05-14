import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Google librairy 
import * as VueGoogleMaps from 'vue2-google-maps'

import './registerServiceWorker'
Vue.use(VueGoogleMaps, {
  load: {
    key:  process.env.VUE_APP_API_TOKEN,
  }
})


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
