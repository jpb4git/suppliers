import Vue from 'vue'
import Router     from 'vue-router'



import Home             from './views/Home.vue'
import About            from './views/About.vue'
import Suppliers        from './views/Suppliers.vue'
import Supplier         from './components/Supplier.vue'

import Map              from './views/Map.vue'
import SupplierForm     from './components/supplierForm.vue'
import SupplierFormEdit from './components/supplierFormEdit.vue'
import SupplierDelete   from './components/supplierDelete.vue'
import MapLeafLet       from './views/mapLeaflet.vue'

Vue.use(Router)
/**
 * test
 */
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
    {
      path: '/suppliers/edit/:id',
      name: 'supplierEdit',
      component: SupplierFormEdit
    },
    {
      path: '/suppliers/delete/:id',
      name: 'supplierDelete',
      component: SupplierDelete
    }
    ,
     {
      path: '/map',
      name: 'map',
      component: Map
    },
    { //Temp route
      path: '/AddSupplier',
      name: 'AddSupplier',
      component: SupplierForm
    },
    { //Temp route
      path: '/mapLeaf',
      name: 'mapLeaf',
      component: MapLeafLet
    }
  ]
})
