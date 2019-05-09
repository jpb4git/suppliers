<template>
  <div>
  <h1>Suppliers Leaflet Map</h1>
  <b-container>
    <b-row>
      <b-col class="d-flex  justify-content-center p-1">
          <div style="height: 10%; width: 100%">
                <div class="info" style="height: 100%">
                    <span>Center: {{ center }}</span>
                    <span>Zoom: {{ zoom }}</span>
                    <span>Bounds: {{ bounds }}</span>
                </div>
                <LMap
                    style="height: 100vh; width: 100%"
                    :zoom="zoom"
                    :center="center"
                    @update:zoom="zoomUpdated"
                    @update:center="centerUpdated"
                    @update:bounds="boundsUpdated"
                    >
                    <LTileLayer :url="url"></LTileLayer>
                     <LMarker  v-for="supplier in suppliers" :lat-lng="[parseInt(supplier.latitude),parseInt(supplier.longitude)]" :key="supplier.id"></LMarker>
                </LMap>
            </div>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
 const axios = require('axios');
 import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
 import { Icon }  from 'leaflet'
 import 'leaflet/dist/leaflet.css'
 delete Icon.Default.prototype._getIconUrl;

 Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {

  name: 'MapLeafLet',
  data : function (){
    return {
            suppliers: [],
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 3,
            center: [47.413220, -1.219482],
            bounds: null
      }

  },

  components: {
        LMap,
        LTileLayer,
        LMarker
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
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
