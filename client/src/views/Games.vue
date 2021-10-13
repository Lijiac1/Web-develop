<template>
    <div class="background">
      <navagator/>
        <b-container fluied= "md">
        <h2>Games</h2>
<b-row class="mt-5">
          <b-col class="computerColor" cols="8">Computer:</b-col>
          <b-col cols="1">{{computer_number}}</b-col>
</b-row>
<b-row class="mt-5">
      <b-col class="yourColor" cols="8">You:</b-col>
    <b-col cols="1"> {{your_number}} </b-col>
</b-row>

  <b-row class="mt-5">
      <b-col class="result" cols="8">Results:</b-col>
      <b-col cols="1">{{results}}</b-col>
  </b-row>

<b-row class="mt-5">
    <b-col cols="8">Your Chips:</b-col>
    <b-col cols="1">{{YourChips}}</b-col>
  </b-row>

  <b-row class="mt-5">
    <b-col><b-button variant="primary" href="#" @click="takeAnumber">Take a card</b-button></b-col>
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
import Cookies from 'js-cookie'
import { Api } from '../Api'
export default {
  components: { navagator },

  data() {
    return {
      computer_number: 0,
      your_number: 0,
      results: '',
      money: Cookies.get('money'),
      chips: Cookies.get('chips')
    }
  },
  methods: {
    takeAnumber() {
      Api.get('/games_random').then(response => {
        this.computer_number = response.data.number
      }).catch(error => {
        console.error(error)
      })
      Api.get('/games_random').then(response => {
        this.your_number = response.data.number
      }).catch(error => {
        console.error(error)
      })
    }

  }
}

</script>
<style>
.computerColor{
  color: rgb(0, 17, 255);
}
.yourColor{
  color:rgb(0, 225, 255)
}
.result{
  color: brown;
}

</style>
