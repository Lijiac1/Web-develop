<template>
  <div>
    <navagator/>
    <Home/>

  </div>
</template>

<script>
import Home from '../components/Home'
import navagator from '../components/navagator'
export default {
  components: {
    navagator,
    Home
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
