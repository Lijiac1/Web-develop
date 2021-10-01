<template>
  <div>
      <h1> Home </h1>
      <b-row style="midiemwidth: 38rem; height: 50" >
          <b-col>
  <b-card-group deck>
      <b-card title="Info of User">
      <b-list-group-item>Username:</b-list-group-item>
      <b-list-group-item>Money:</b-list-group-item>
      <b-list-group-item>Chips:</b-list-group-item>
      </b-card>
      </b-card-group>
      </b-col>
      <b-col>
         <b-card title="Intro of Game">
<b-text> The player draws cards randomly from 1-10.
    When the sum is equal to 21, they win, and if the sum is greater than 21,
    they lose. The value in the computer's hand is a random number between 15-21.
     When the player decides not to draw any more cards,
     the sum of the cards in the hand is less than 21 and is closer to 21,
      or the hand equals to 21 wins</b-text>
         </b-card>
      </b-col>
      </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
