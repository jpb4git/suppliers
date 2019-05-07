<template>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1">
        <h1>Suppliers List</h1>
        <span class="mt-3 bg-success"></span>
      </b-col>
    </b-row>


   <b-row class="mt-5" v-if="loading">
     <b-col v-for="supplier in suppliers" :key="supplier.id" >
          <Supplier :id="supplier.id" :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt" />
    </b-col>
   </b-row>
     <b-row class="mt-5" v-else>
        <h1 class="text-info w-100 text-center"> Chargement en cours ...</h1>
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
    suppliers: [],
    loading: false,
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
           
              console.log(this);
              console.log(response.data);
              this.suppliers = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  },
  created() {
    
   // axios.delete(('https://api-suppliers.herokuapp.com/api/suppliers/5cd16c193d8f780017bf0a7e'))

     axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
          .then((response) => {
            this.loading = true;
            this.suppliers = response.data;
          })
          .catch(function (error) {
               if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
          });
  },
  computed :{

  }
}
</script>






<style lang="scss">

ul{
  list-style: none;
}
</style>