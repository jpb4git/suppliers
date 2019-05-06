<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Suppliers List</h1><button @click="getSuppliers">Charger</button>
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
const axios = require('axios');
import Supplier from '@/components/Supplier.vue'
import { format, render, cancel, register } from 'timeago.js';
export default {
  name: 'Suppliers',
  data :function (){
    return {
    suppliers: []
    } 
  },
  components :{
   Supplier
  },
  methods :{
      // Ajax call
      getSuppliers : function(){
          axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
          .then((response) => {
              console.log(this);
              console.log(response.data);

              this.suppliers = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  }
}
</script>

<style lang="scss">

ul{
  list-style: none;
}
</style>