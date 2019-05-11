<template>

  <div class="b-col  p-5 m-2">
        <div class="d-flex justify-content-around">
            <h1>Edit Supplier</h1> <span class="bg-danger p-2 text-light rounded mt-3 xCross" @click="closeForm">x</span>
        </div>
        <form class="w-100 formAdd">
            <div class="form-group ">
              <label>name</label>
              <input type="text" class="w-100" name="name" v-model="supplier.name">
            </div>
            <div class="form-group w-100">
                <label>checkedAt</label>
                <input type="datetime" class="w-100" name="checkedAt" v-model="supplier.checkedAt">
            </div>
            <div class="form-group w-100">
                <label>Status</label>
                <input type="text" class="w-100" name="status" v-model="supplier.status">
            </div>
            <div class="form-gsupplierForm.vueroup w-100">
                <label>latitude</label>
                <input type="text" class="w-100" name="latitude" v-model="supplier.latitude">
            </div>
            <div class="form-group w-100">
                <label>longitude</label>
                <input type="text" class="w-100" name="longitude" v-model="supplier.longitude">
            </div>
            <input type="button" class="btn btn-success w-100" @click="storeSupplier()">
        </form>
    </div>
</template>


<script>
 const axios = require('axios');
 import api from '@/api/api';
export default {
  name: 'SupplierForm',

  data:function (){
    return {
      supplier :{
        id        : "",
        name      : "",
        status    : "",
        longitude : "",
        latitude  : "",
        checkedAt : "",
      },
      formName      : "",
      formStatus    : "",
      formLongitude : "",
      formLatitude  : "",
      formCheckedAt : "",

    }
  },
  computed :{
    stock : function () {
      return (this.status) ? "ok" : "ko"
    }
  },
  methods : {
    showForm : function(){
        this.showSupplier = !this.showSupplier;
    },
    closeForm : function(){
        this.showSupplier = !this.showSupplier;
    },
    storeSupplier : function(){

         axios.put('https://api-suppliers.herokuapp.com/api/suppliers/'+this.supplier.id,
           {
            name        : this.supplier.name,
            checkedAt	: this.supplier.CheckedAt,
            status      : this.supplier.status,
            latitude	: this.supplier.latitude,
            longitude   : this.supplier.longitude
           }
         ).then(function(response){
            console.log(response)
         }).catch(function(error){
            console.log(error);
         });

    },
  },
  mounted : function(){
  },

  created:function(){
    console.log('https://api-suppliers.herokuapp.com/api/suppliers/'+ this.$router.currentRoute.params.id);
    api.getSupplier(this, 'https://api-suppliers.herokuapp.com/api/suppliers/'+ this.$router.currentRoute.params.id);
    //store on data
    console.log('sup : ' + this.supplier.id);

  },
}
</script>

<style scoped lang="scss">
.success{
  background-color: rgb(49, 177, 49);
  color: rgb(255, 255, 255)
}
.error{
  background-color: rgb(233, 16, 16);
  color: aliceblue
}

.b-jumbotron{
  background-color: rgb(72, 90, 105)!important;
}
.xCross:hover{
  cursor: pointer;
}


</style>
