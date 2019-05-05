<template>
  <div class="home mt-5">
    <img alt="Vue logo" src="../assets/logo-cre-cyan.svg">
    <HelloWorld msg="Supplier App Demo"/>
    <p>Remain stuff</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
body{background-color: red}

.home{
    img{width:7%}
    p{color:darken(red,20)}
}


</style>
