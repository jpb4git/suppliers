<template>
 <div>
  <h1>Liste</h1>
     
  </div>
</template>


<script>
// @ is an alias to /src
import Supplier from '@/components/Supplier.vue'


export default {
  name: 'SupplierList',

  data: function(){
    return {
        Suppliers: [
          {
            id: 1,
            name: "Fournisseur 1",
            status: true,
            checkedAt: new Date()
          },
          {
            id: 2,
            name: "Fournisseur 2",
            status: false,
            checkedAt: new Date()
          }
        ]
    }
  },
  
  components: {
    Supplier
  },

  data :function (){
    return {}
    }, 
}
</script>

<style scoped lang="scss">
</style>

