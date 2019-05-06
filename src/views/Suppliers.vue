<template>
  <div>
   <h1>Suppliers List</h1>
   <ul>
     <li v-for="supplier in suppliers" :key="supplier.id" >
       <Supplier :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt" />
     </li>
   </ul>  
  </div>
</template>



<script>
import Supplier from '@/components/Supplier.vue'
export default {
  name: 'Suppliers',
  data :function (){
    return {
    suppliers: [
    {
      id: 1,
      name: "Fournisseur 1",
      status: true,
      checkedAt: new Date().toLocaleString()
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: new Date().toLocaleString()
    },
    {
      id: 3,
      name: "Fournisseur 3",
      status: true,
      checkedAt: new Date().toLocaleString()
    }
  ]
    } 
  },
  components :{
   Supplier
  }
}
</script>