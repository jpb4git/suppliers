<template>
 <div>
   <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <h1>{{name}}</h1>
    <hr class="my-4">
    <h3 :class="{success : status,error :!status}">A du stock ? {{stock}}</h3>
    <hr class="my-4">
    <h5>{{checkedAt}}</h5>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Supplier', 
  props:{
    id :{
      type :Number,
    },
    name : {
      type : String,
      default : "Supplier-Default"
    },
    status:{
      type : Boolean ,
      default :true
    },
    checkedAt:{
      type : String,
      default : "Default Date" //Date().toLocaleString() 
    }  
  },
  data :function (){
    return {}
  },
  computed :{
    stock : function () {
      return (this.status) ? "ok" : "ko"
    }
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


</style>