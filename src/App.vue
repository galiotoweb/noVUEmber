<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>#noVUEmber</h1>
    <h2>Thirty Days of Vue.js Apps</h2>
    <h2>Projects</h2>
    <ul>
      <li>
        <router-link to="/hello-world">Hello World</router-link>
      </li>
      <li>
        <router-link to="/todo-app">To Do App</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
// import sweetalert from 'sweetalert';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
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
