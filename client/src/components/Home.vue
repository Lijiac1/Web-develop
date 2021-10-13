<template>
  <div>
      <h1> Home </h1>
      <b-row style="midiemwidth: 38rem; height: 50" >
          <b-col>
  <b-card-group deck>
      <b-card class="user" title="Info of User">
      <b-list-group-item class="userList">Username:{{username}}</b-list-group-item>
      <b-list-group-item class="userList">Money:{{money}}</b-list-group-item>
      <b-list-group-item class="userList">Chips:{{chips}}</b-list-group-item>
      <b-button class = "mt-2" variant="outline-primary" @click="topup">Top up</b-button>
      <b-button class = "mt-2" variant="outline-primary" >Delete all user</b-button>
      <b-button class = "mt-2" variant="outline-primary" >Delete the user</b-button>
      </b-card>
      </b-card-group>
      </b-col>
      <b-col>
         <b-card id="card" title="Intro of Game">
<b-text id= "text"> The player take a card,compare with the card that the computer got, the bigger one win.</b-text>
         </b-card>
         <b-card title="Relationship">
          <b-row>
          <b-col cols="10">Relation:{{}}</b-col>
          </b-row>
          <b-button class = "mt-2" variant="outline-primary" >Post relationship</b-button>
          <b-button class = "mt-2" variant="outline-primary" >Get relationship</b-button>
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
h1{
  color: orange;
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
