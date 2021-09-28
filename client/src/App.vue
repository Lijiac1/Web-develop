<template>
  <div id="app">
    <navagator/>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>
<script>
import navagator from './components/navagator.vue'
export default {
  components: {
    navagator: navagator
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
