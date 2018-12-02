<template>
  <div id="app">
    <h1 class="site-title"><img class="logo" src="./assets/logo.png"> #noVUEmber</h1>
    <h2 class="site-tagline">Thirty Days of Vue.js Apps</h2>
    <h2>Projects</h2>
    <ul>
      <li>
        <router-link to="/hello-world">Hello World</router-link>
      </li>
      <li>
        <router-link to="/todo-app">To Do App</router-link>
      </li>
      <li>
        <router-link to="/vue-router">Vue Router App</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .logo {
    width: 40px;
    height: auto;
  }
}
h1, h2 {
  font-weight: normal;
}
.site-title {
  margin-bottom: 10px;
}
.site-tagline {
  margin-top: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
