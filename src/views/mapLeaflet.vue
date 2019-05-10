<template>
    <div>
        <h1>Suppliers Leaflet Map</h1>
        <b-container>
            <b-row v-if="loaded">

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
                            <LMarker v-for="supplier in suppliers"
                                     :lat-lng="[parseInt(supplier.latitude),parseInt(supplier.longitude)]"
                                     :key="supplier.id"></LMarker>
                        </LMap>
                    </div>
                </b-col>
            </b-row>
            <b-row v-else>
                <b-col>
                    <h1 v-if="error" class="text-danger w-100 text-center"> Erreur lors du chargement des données. </h1>
                    <h1 v-else class="text-info w-100 text-center"> Chargement en cours ...</h1>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
  const axios = require('axios')
  import api from '@/api/api';
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
  import { Icon } from 'leaflet'
  import 'leaflet/dist/leaflet.css'

  delete Icon.Default.prototype._getIconUrl

  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  })

  export default {

    name: 'MapLeafLet',
    data: function () {
      return {
        suppliers: [],
        loaded : false,
        error :false,
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
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

    created () {
      // passage du component par ref
      api.getSuppliers(this, 'https://api-suppliers.herokuapp.com/api/suppliers');
    },
    methods: {
      zoomUpdated (zoom) {
        this.zoom = zoom
      },
      centerUpdated (center) {
        this.center = center
      },
      boundsUpdated (bounds) {
        this.bounds = bounds
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
