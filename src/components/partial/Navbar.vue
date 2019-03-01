<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Vue Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <router-link tag="li" class="nav-item" active-class="active" to="/home">
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/blog">
        <a class="nav-link">Our Blog</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/about">
       <a class="nav-link">About</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/contact">
        <a class="nav-link">Contact</a>
      </router-link>
    </ul>
  </div>
</nav>
</template>
<script>
	export default {

	}
</script>
<style scoped>
</style>