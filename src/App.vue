<template>
  <div id="app">
    <navbar></navbar>    
   <div class="container">
     <div class="row">
       <div class="col-md-10 offset-md-1">
        <img src="./assets/logo.png">
        <router-view/>       
       </div> 
     </div>
   </div>
  </div>
</template>

<script>
import navbar from '@/components/partial/Navbar'

export default {
  name: 'App',
  components: {navbar}
}
</script>
<style>
@import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
