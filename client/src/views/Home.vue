<template>
  <div>
    <navagator/>
    <Home/>

    <!-- <b-jumbotron header="DIT341 Frontend" lead="Welcome to your DIT341 Frontend Vue.js App">
      <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get Message from Server</b-button>
      <p>Message from the server:<br/>
      {{ message }}</p>
    </b-jumbotron> -->

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
