<template>
  <div>
   <h1>Suppliers List</h1>
           <!-- props=data -->
      <Supplier :name="name" :status="status" :checkedAt="checkedAt" />
    
  </div>
</template>



<script>
import Supplier from '@/components/Supplier.vue'
export default {
  name: 'Suppliers',
  data :function (){
    return {
    name: 'Mon Fournisseur',
    status: false, 
    checkedAt: new Date() 
    } 
  },
  components :{
   Supplier
  }
}
</script>