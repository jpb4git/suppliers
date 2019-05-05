import Vue from 'vue'
import Router     from 'vue-router'
import Home       from './views/Home.vue'
import About      from './views/About.vue'
import Suppliers  from './views/Suppliers.vue'
import Supplier   from './components/Supplier.vue'
import Map        from './views/Map.vue'

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
      component: About
    },
     {
      path: '/suppliers',
      name: 'suppliers',
      component: Suppliers
    },
     { //Temp route
      path: '/supplier',
      name: 'supplier',
      component: Supplier
    },
     {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
