<template>
    <div>
      <navagator/>
        <b-container fluied= "md">
        <h1>Games</h1>
<b-row class="mt-5">
          <b-col cols="8">Computer:</b-col>
          <b-col cols="1">{{}}</b-col>
</b-row>
<b-row class="mt-5">
      <b-col cols="8">You:</b-col>
    <b-col cols="1"> {{}} </b-col>
</b-row>

  <b-row class="mt-5">
      <b-col cols="8">Resoults:</b-col>
      <b-col cols="1">{{}}</b-col>
  </b-row>

  <b-row class="mt-5">
    <b-col><b-button variant="primary" href="#">Take a card</b-button></b-col>
    <b-col><b-button variant="danger" href="#">Leave the game</b-button></b-col>
  </b-row>
  <b-row class="mt-5">
    <b-col><b-text>place the Chips</b-text></b-col>
    <b-col ><b-button variant="primary">50</b-button></b-col>
    <b-col col lg="1"><b-button variant="primary">100</b-button></b-col>
    <b-col><b-button variant="primary">All in!</b-button></b-col>
  </b-row>

    </b-container >
</div>
</template>

<script>
import navagator from '../components/navagator.vue'
export default {
  components: { navagator }
}
</script>
