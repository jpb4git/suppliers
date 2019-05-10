<template>
  <div>
  <h1>Suppliers Map</h1>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1" v-if="loaded">
          <gmap-map :center="pos" :zoom="7" style="width: 100%; height: 500px">
          <GmapMarker v-for="supplier in suppliers"
              :position="{lat:parseFloat(supplier.latitude),lng:parseFloat(supplier.longitude)}" :key="supplier.id">
            </GmapMarker>
              <!-- User Browser Location Icon  -->
            <GmapMarker :position="pos"
                          icon="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/64/Map-Marker-Marker-Outside-Pink.png">
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
             usrCoords : {},
             loaded: false,
             error: false,
             pos : {'lat' : 44,'lng' : 7.15}
      }

  },

  created() {
    console.log(this.pos.latitude);
    // passage du component par ref
    api.getSuppliers(this, 'https://api-suppliers.herokuapp.com/api/suppliers');

  },
  methods: {

    updateMapUserPoint :  function (){

      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition((position) => {
          this.pos.lat =  position.coords.latitude
          this.pos.lng = position.coords.longitude
        });
      }
      else{
        console.log("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
      }

    },
  },

  mounted(){
    this.updateMapUserPoint();
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.b-container{
  .b-row{
    .b-col{

    }
  }

    .GmapMarker{
        img{width : 50px!important;}

    }

}
</style>
