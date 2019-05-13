<template>

  <div class="b-col  p-5 m-2">
        <div class="d-flex justify-content-around">
            <h1>Nouveau Supplier</h1> <span class="bg-danger p-2 text-light rounded mt-3 xCross" @click="closeForm">x</span>
        </div>
        <form class="w-100 formAdd">
            <div class="form-group ">
                <label>name</label>
                <input type="text" class="w-100" name="name" v-model="formName">
            </div>
            <div class="form-group w-100">
                <label>checkedAt</label>
                <input type="date" class="w-100" name="checkedAt" v-model="formCheckedAt">
            </div>
            <div class="form-group w-100">
                <label>Status</label>
                <input type="text" class="w-100" name="status" v-model="formStatus">
            </div>
            <div class="form-gsupplierForm.vueroup w-100">
                <label>latitude</label>
                <input type="text" class="w-100" name="latitude" v-model="formLatitude">
            </div>
            <div class="form-group w-100">
                <label>longitude</label>
                <input type="text" class="w-100" name="longitude" v-model="formLongitude">
            </div>
            <input type="button" class="btn btn-success w-100" @click="createSupplier()" value="Ajouter">
        </form>
    </div>
</template>


<script>
 const axios = require('axios');
export default {
  name: 'SupplierForm',

  data :function (){
    return {
      showSupplier : true,

      formName      : "",
      formStatus    : "",
      formLongitude : "",
      formLatitude  : "",
      formCheckedAt  : "",

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
    createSupplier : function(){
        /*let formData = new FormData();
        formData.append('name', this.formName);
        formData.append('status', this.formStatus);
        formData.append('longitude', this.formLongitude);
        formData.append('latitude', this.formLatitude);
        formData.append('CheckedAt', this.formCheckedAt);
        console.log(formData);
        */
         axios.post('https://api-suppliers.herokuapp.com/api/suppliers',
           {
            name        : this.formName,
            checkedAt	: this.formCheckedAt,
            status      : this.formStatus,
            latitude	: this.formLatitude,
            longitude   : this.formLongitude
           }
         ).then(function(response){
            console.log(response)
         }).catch(function(error){
            console.log(error);
         });

    },
  }
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
