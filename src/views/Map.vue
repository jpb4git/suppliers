<template>
  <div>
  <h1>Suppliers Map</h1>
  <b-container>
    <b-row>
      <b-col>
          <gmap-map :center="{lat:latitude, lng:longitude}" :zoom="7" style="width: 50%; height: 400px">
          <GmapMarker 
              v-for="supplier in suppliers" 
              :position="{lat:supplier.latitude,lng:supplier.longitude}" :key="supplier.id">
            </GmapMarker>
          </gmap-map>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>


export default {
  name: 'Map',
  data : function (){
    return {
              latitude:48.55,
              longitude: 3.01, 
            suppliers: 
            [
              {
                id: 1,
                latitude:48.55,
                longitude: 3.01   
              },
              {
                id: 2,
                latitude: 48.55,
                longitude: 3.9  
              }
            ]
      }

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