<template>
  <div>
  <h1>Suppliers Map</h1>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1" v-if="loading">
          <gmap-map :center="{lat:latitude, lng:longitude}" :zoom="7" style="width: 100%; height: 500px">
          <GmapMarker 
              v-for="supplier in suppliers" 
              :position="{lat:parseInt(supplier.latitude),lng:parseInt(supplier.longitude)}" :key="supplier.id">
            </GmapMarker>
          </gmap-map>
      </b-col>
      <b-col v-else>
          <h1 class="text-info w-100 text-center"> Chargement en cours ...</h1>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
 const axios = require('axios');

export default {

  name: 'Map',
  data : function (){
    return {
             suppliers: [],
             loading: false,
             error: false,
             latitude:-12.15,
             longitude: -125.01, 
      }

  },
  created() {

     axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
          .then((response) => {
            console.log(response.data)
            this.loading = true;
            this.suppliers = response.data;
          })
          .catch(function (error) {
               if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
          });
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