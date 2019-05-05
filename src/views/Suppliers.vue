<template>
  <div>
   <h1>Suppliers List</h1>
   <Supplier />
  </div>
</template>



<script>
import Supplier from '@/components/Supplier.vue'
export default {
  name: 'Suppliers',
  components :{
   Supplier
  }
}
</script>