<template>
  <div>
      <h1 class="home"> Home </h1>
      <b-row style="midiemwidth: 38rem; height: 50" >
          <b-col>
  <b-card-group deck>
      <b-card class="user" title="Info of User">
      <b-list-group-item class="userList">Username:{{username}}</b-list-group-item>
      <b-list-group-item class="userList">Money:{{money}}</b-list-group-item>
      <b-list-group-item class="userList">Chips:{{chips}}</b-list-group-item>
      <b-button class = "mt-2" variant="outline-primary" @click="topup">Top up</b-button>
      <b-button class = "mt-2" variant="outline-primary" @click="deleteAlluser">Delete all user</b-button>
      <b-button class = "mt-2" variant="outline-primary" @click="deleteTheuser">Delete the user</b-button>
      </b-card>
      </b-card-group>
      </b-col>
      <b-col>
         <b-card id="card" title="Intro of Game">
<p id= "text"> The player take a card,compare with the card that the computer got, the bigger one win.</p>
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
      e_bank_id: Cookies.get('e_bank_id')

    }
  },
  methods: {

    topup(event) {
      const u = {
        money: this.money,
        chips: this.chips,
        e_bank_id: this.e_bank_id
      }
      Api.put(`/users/topup/${this.user_id}`, u).then(response => {
        console.log(response)
        this.money = response.data.money
        Cookies.set('money', response.data.money)
      }).catch(error => {
        alert('Backend error')
        console.error(error)
      })
    },
    deleteAlluser() {
      Api.delete('/users').then(response => {
        this.$router.push('/')
      }).catch(error => {
        alert('Backend error')
        console.error(error)
      })
    },
    deleteTheuser() {
      Api.delete(`/users/${this.user_id}`).then(response => {
        this.$router.push('/')
      }).catch(error => {
        alert('Backend error')
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
h1{
  color: orange;
  font-family:monospace;
  font-style:italic;
}
#card{
  color: rgb(252, 0, 0);
}
#text{
  color: black;
}
.user{
  color: rgb(0, 181, 253);
}
.userList{
  color: black;
}

</style>
