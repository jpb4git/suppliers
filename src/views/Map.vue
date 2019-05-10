<template>
  <div>
  <h1>Suppliers Map</h1>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1" v-if="loaded">
          <gmap-map :center="{lat:latitude, lng:longitude}" :zoom="7" style="width: 100%; height: 500px">
          <GmapMarker
              v-for="supplier in suppliers"
              :position="{lat:parseInt(supplier.latitude),lng:parseInt(supplier.longitude)}" :key="supplier.id">
            </GmapMarker>
          </gmap-map>
      </b-col>
      <b-col v-else>
          <h1 v-if="error" class="text-danger w-100 text-center"> Erreur lors du chargement des données. </h1>
          <h1 v-else class="text-info w-100 text-center"> Chargement en cours ...</h1>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
 const axios = require('axios');
 import api from '@/api/api';
export default {

  name: 'Map',
  data : function (){
    return {
             suppliers: [],
             loaded: false,
             error: false,
             latitude:-12.15,
             longitude: -125.01,
      }

  },
  created() {

    // passage du component par ref
    api.getSuppliers(this, 'https://api-suppliers.herokuapp.com/api/suppliers');

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.b-container{
  .b-row{
    .b-col{

    }
  }

}
</style>
