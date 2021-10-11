<template>
  <div>
      <h1> Home </h1>
      <b-row style="midiemwidth: 38rem; height: 50" >
          <b-col>
  <b-card-group deck>
      <b-card title="Info of User">
      <b-list-group-item>Username:{{username}}</b-list-group-item>
      <b-list-group-item>Money:{{money}}</b-list-group-item>
      <b-list-group-item>Chips:{{chips}}</b-list-group-item>
      <b-button class = "mt-2" variant="outline-primary" @click="topup">Top up</b-button>
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
import Cookies from 'js-cookie'
import { Api } from '../Api'

export default {
  name: 'home',
  data() {
    return {
      user_id: Cookies.get('_id'),
      username: Cookies.get('username'),
      money: Cookies.get('money'),
      chips: Cookies.get('chips'),
      e_bank_id: null

    }
  },
  mounted() {
    Api.get('/e_banks').then(response => {
      this.e_bank_id = response.data.e_banks[1]._id
    }).catch(error => {
      console.error(error)
    })
    Cookies.set('e_bank_id', this.e_bank_id)
  },
  methods: {

    topup(event) {
      this.money = Number(this.money) + 10000
      Cookies.set('money', this.money)
      const u = {
        money: this.money,
        chips: this.chips,
        e_bank_id: this.e_bank_id
      }
      Api.put(`/users/${this.user_id}`, u).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
    }

  }
}

</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
