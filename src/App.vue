<template>
  <div id="app">
    <!--routing with vue-router way to do -->
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |  
      <router-link to="/about">About</router-link> |  
      <router-link to="/map"> Map</router-link> |
      <router-link to="/list">list</router-link>
    </div>
   --> 
    <!-- bootstrap vue like-->
<div>
  <!-- As a heading -->
  <b-navbar  variant="dark" type="dark" id="nav">
    <img alt="Suppliers logo" src="@/assets/logo-cre-cyan.svg" class="img-flex" >
    <b-navbar-brand tag="h6" class="m-0 ">
       
      Suppliers
    </b-navbar-brand>
     <b-nav>
      <b-nav-item to="/" active>Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/map">Map</b-nav-item>
      <b-nav-item to="/list">list</b-nav-item>
      
    </b-nav>
  </b-navbar>
</div>


   
    <!--remember that kiddo ! add this <router-view/> or trouble will show up -->
    <router-view/>
</div>
</template>

<style lang="scss">
body{background-color: #34485d}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(235, 224, 224);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #b0b4b8;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  img{width:2%;margin-right:15px;}
}
.b-navbar{
  background-color: #42b983!important;
}
</style>
