import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/About.vue'
import list from './views/SuppliersList.vue'
import map from './views/SuppliersMap.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
