<template>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1">
        <h1>Suppliers List</h1>
        <span class="mt-3 bg-success"></span>
      </b-col>
    </b-row>


   <b-row class="mt-5" v-if="loaded">
     <b-col v-for="supplier in suppliers" :key="supplier.id" >
          <Supplier :id="supplier.id" :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt" />
    </b-col>
   </b-row>
     <b-row class="mt-5" v-else>
         <b-col v-if="error">
             <h1 class="text-danger w-100 text-center"> Erreur lors du chargement des données. </h1>
         </b-col>
         <b-col v-else>
            <h1 class="text-info w-100 text-center"> Chargement en cours ...</h1>
         </b-col>
     </b-row>
  </b-container>
</template>



<script>
  const axios = require('axios');
  import Supplier from '@/components/Supplier.vue';
  import api from '@/api/api';

  import { format, render, cancel, register } from 'timeago.js';

export default {
  name: 'Suppliers',
  data :function (){
    return {
    suppliers: [],
    loaded: false,
    error: false,
    }
  },
  components :{
   Supplier,


  },
  methods :{
      // Ajax call
      getSuppliers : function(){
          axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
          .then((response) => {
              this.suppliers = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  },
  created() {
    // passage du component par ref
    api.getSuppliers(this, 'https://api-suppliers.herokuapp.com/api/suppliers');

   // axios.delete(('https://api-suppliers.herokuapp.com/api/suppliers/5cd16c193d8f780017bf0a7e'))

  }
}
</script>






<style lang="scss">

ul{
  list-style: none;
}
</style>
