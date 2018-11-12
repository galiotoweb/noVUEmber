<template>
  <div id="app">
    <!-- navbar -->
    <div class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  h1 {
    padding-top: 100px;
    text-align: center;
  }
}
</style>
