<template>
 <div>
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
      <h1>{{ name }}</h1>
      <hr class="my-4">
      <h5 :class="{success : status , error : !status }">A du Stock {{stock}}</h5>
      <hr class="my-4">
      <h3>{{ checkedAt }}</h3>
    </b-jumbotron>
 

  
  </div>
</template>


<script>
import { format, render, cancel, register } from 'timeago.js';
export default {
  
  name: 'Supplier', 
  props:{
    id :{
      type :String,
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
      default : Date().toLocaleString() 
    },
    latitude:{
      type : String,
      default : "-12.15",
             
    },
    longitude:{
      type : String,
      default : "-125.01",  
    }  
  },
  data :function (){
    return {
    
    }
  },
  computed :{
    stock : function () {
      return (this.status) ? "ok" : "ko"
    },
    beautifyDate : function(){}
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