<template>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1">
        <h1>Suppliers List</h1>
        <span class="mt-3 bg-success"></span>
          <select class="ml-5"   v-model="listState">
              <option value="" selected>all suppliers</option>
              <option value="true">Suppliers with stocks</option>
              <option value="false">Suppliers without stocks</option>

          </select>
      </b-col>
    </b-row>


   <b-row class="mt-5" v-if="loaded">
     <b-col v-for="supplier in filteringSuppliers()" :key="supplier.id" >
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
    suppliers   : [],
    listState   : "",
    loaded      : false,
    error       : false,
    }

  },
  components :{
   Supplier,


  },
  methods :{

    filteringSuppliers :function(){
      if (this.listState == ''){
        return this.suppliers;
      }

      return this.suppliers.filter(supplier => supplier.status.toString() == this.listState );
    },

  },

  computed :{

  },

  created() {
    // passage du component par ref
    api.getSuppliers(this, 'https://api-suppliers.herokuapp.com/api/suppliers');

  }
}
</script>






<style lang="scss">

ul{
  list-style: none;
}
</style>
