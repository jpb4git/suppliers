<template>

  <div class="b-col  p-5 m-2">

        <form class="w-100">
            <div class="form-group ">
              <label>name</label>
                <span>{{supplier.name}}</span>
            </div>
            <div class="form-group w-100">
                <label>checkedAt</label>
                <span>{{supplier.checkedAt}}</span>
            </div>
            <div class="form-group w-100">
                <label>Status</label>
                <span>{{supplier.status}}</span>
            </div>
            <div class="form-gsupplierForm.vueroup w-100">
                <label>latitude</label>
                <span>{{supplier.latitude}}</span>
            </div>
            <div class="form-group w-100">
                <label>longitude</label>
                <span>{{supplier.longitude}}</span>
            </div>
            <input type="button" class="btn btn-success w-100" @click="deleteSupplier()" value="Supprimer">
        </form>
    </div>
</template>


<script>
 const axios = require('axios');
 import api from '@/api/api';
export default {
  name: 'supplierDelete',

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
    }
  },
  computed :{
    stock : function () {
      return (this.status) ? "ok" : "ko"
    }
  },
  methods : {

    deleteSupplier : function(){
         let that = this;
         axios.delete('https://api-suppliers.herokuapp.com/api/suppliers/'+this.supplier.id)

         .then(function(response){

           api.getSuppliers(this,'https://api-suppliers.herokuapp.com/api/suppliers')
           that.$router.push('/suppliers')
         }).catch(function(error){
            console.log(error);
         });
        //
        api.getSuppliers(this,'https://api-suppliers.herokuapp.com/api/suppliers')
        this.$router.push('/suppliers')
    },
  },
  mounted : function(){
  },

  created:function(){
    api.getSupplier(this, 'https://api-suppliers.herokuapp.com/api/suppliers/'+ this.$router.currentRoute.params.id);
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
