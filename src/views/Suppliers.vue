<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Suppliers List</h1>
      </b-col>
    </b-row>
   <b-row>
     <b-col v-for="supplier in suppliers" :key="supplier.id" >
          <Supplier :id="supplier.id" :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt" />
    </b-col>
   </b-row>  
  </b-container>
</template>



<script>
import Supplier from '@/components/Supplier.vue'
import { format, render, cancel, register } from 'timeago.js';
export default {
  name: 'Suppliers',
  data :function (){
    return {
    suppliers: [
    {
      id: 1,
      name: "Fournisseur 1",
      status: true,
      checkedAt: format(new Date().toLocaleString(),'fr_FR')
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: format(new Date().toLocaleString())
    },
    {
      id: 3,
      name: "Fournisseur 3",
      status: true,
      checkedAt: format(new Date().toLocaleString())
    }
  ]
    } 
  },
  components :{
   Supplier
  }
}
</script>

<style lang="scss">

ul{
  list-style: none;
}
</style>