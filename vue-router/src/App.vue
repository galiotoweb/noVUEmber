<template>
  <div id="vue-router-app">
    <!-- menu -->
    <div class="ui menu">
      <router-link to="/" class="item">Home</router-link>
      <router-link to="/blog" class="item">Blog</router-link>
      <router-link to="/services" class="item">Services</router-link>
      <router-link to="/contact" class="item">Contact</router-link>
    </div>
    <transition name="moveInUp">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#vue-router-app {
  h1 {
    padding-top: 100px;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  .moveInUp-enter-active{
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
  .moveInUp-leave-active{
    animation: moveInUp .3s ease-in;
  }
  @keyframes moveInUp{
    0%{
      transform: translateY(0);
    }
      100%{
      transform: translateY(-400px);
    }
  }
}
</style>
