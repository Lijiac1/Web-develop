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
    <b-col cols="1">{{chips}}</b-col>
  </b-row>

  <b-row class="mt-5">
    <b-col cols="8">Your bets:</b-col>
    <b-col cols="1">{{bet}}</b-col>
  </b-row>

  <b-row class="mt-5">
    <b-col><b-button variant="primary" @click="takeAnumber">Take a card</b-button></b-col>
    <b-col><b-button variant="primary" @click="clean">Clean the bet</b-button></b-col>
    <b-col><b-button variant="danger" @click="leave">Leave the game</b-button></b-col>
  </b-row>

  <b-row class="mt-5">
    <b-col>place the Chips</b-col>
    <b-col ><b-button variant="primary" @click="fifty">50</b-button></b-col>
    <b-col col lg="1"><b-button variant="primary" @click="hundred">100</b-button></b-col>
    <b-col><b-button variant="primary" @click="allIn">All in!</b-button></b-col>
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
      name: 'Compare the points of cards',
      rounds: 0,
      total_chips: Cookies.get('total_chips'),
      computer_number: 0,
      your_number: 0,
      results: '',
      bet: 0,
      money: Cookies.get('money'),
      chips: Cookies.get('chips'),
      chipsOn: false
    }
  },
  methods: {
    takeAnumber() {
      if (this.chipsOn) {
        Api.get('/games_random').then(response => {
          this.computer_number = Number(response.data.number)
          return Api.get('/games_random')
        }).then(response => {
          this.your_number = Number(response.data.number)
          if (this.computer_number > this.your_number) {
            this.results = 'You Lose'
            this.total_chips = Number(this.total_chips) + this.bet
            this.chips = Number(this.chips) - this.bet
          } else if (this.computer_number < this.your_number) {
            this.results = 'You Win'
            this.total_chips = Number(this.total_chips) - this.bet
            this.chips = Number(this.chips) + this.bet
          } else {
            this.results = 'Break even'
          }
        }).catch(error => {
          console.error(error)
        }).then(() => {
          this.bet = 0
        })
        this.chipsOn = false
        this.computer_number = 0
        this.your_number = 0
        this.rounds = this.rounds + 1
      } else {
        alert('Please bet')
      }
    },
    fifty() {
      if (this.bet <= this.chips) {
        this.bet = this.bet + 50
        this.chipsOn = true
      } else {
        alert('You can not bet more than you have')
      }
    },
    hundred() {
      if (this.bet <= this.chips) {
        this.bet = this.bet + 100
        this.chipsOn = true
      } else {
        alert('You can not bet more than you have')
      }
    },
    allIn() {
      if (this.bet <= this.chips) {
        this.bet = this.chips
        this.chipsOn = true
      } else {
        alert('You can not bet more than you have')
      }
    },
    clean() {
      this.bet = 0
      this.chipsOn = false
    },
    leave() {
      this.$router.push('/E_bank')
    }

  },
  beforeDestroy() {
    Cookies.set('total_chips', this.total_chips)
    Cookies.set('chips', this.chips)
    Api.put(`/users/${Cookies.get('_id')}`, { money: this.money, chips: this.chips }).then(response => {
    }).catch(error => {
      console.error(error)
    })
    Api.patch(`/e_banks/${Cookies.get('e_bank_id')}`, { total_chips: this.total_chips }).then(response => {
    }).catch(error => {
      console.error(error)
    })
    Api.post('/games', { name: this.name, rounds: this.rounds }).then(response => {
    }).catch(error => {
      console.error(error)
    })
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
h2{
  color: blueviolet;
  font-family: monospace;
  font-style:italic;
}

</style>
