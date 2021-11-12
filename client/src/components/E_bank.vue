<template >
    <b-container class="mt-5">
      <h3>E_bank</h3>
        <b-row class="ebank_info">
            <b-col>
                <b-card
                border-variant="primary"
                header="E-bank info"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-5"
                >
                <p>
                  <b-row>
                    <b-col ><label for="textarea-small">Total money:</label></b-col>
                    <b-col>{{TotalMoney}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Total chips:</label></b-col>
                    <b-col>{{TotalChips}}</b-col>

                </b-row>
                </p>
                <b-row>
                    <b-col><label for="textarea-small">Your money:</label></b-col>
                    <b-col>{{YourMony}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Your chips:</label></b-col>
                    <b-col>{{YourChips}}</b-col>

                </b-row>
                </b-card>
            </b-col>

        </b-row>

        <b-row class="mt-5">
            <b-col><label for="textarea-small">Exchange Money</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          placeholder="Can not more than total money"
          min="0"
          v-model="exchange_money"
        ></b-form-input></b-col>
        <b-col><b-button variant="outline-primary" @click="exchangeMoney">Exchange</b-button></b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col><label for="textarea-small">Exchange Chips</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          placeholder="Can not more than total chips"
          min="0"
          v-model="exchange_chips"
        ></b-form-input></b-col>
        <b-col><b-col><b-button variant="outline-primary" @click="exchangeChips">Exchange</b-button></b-col></b-col>
        </b-row>
        <!-- <b-card title="Relationship" class = "mt-2">
          <b-row>
          <b-col>Relation:{{relationship}}</b-col>
          </b-row>
          <b-button class = "mt-2" variant="outline-primary" @click="getRelationship">Get relationship</b-button>
        </b-card> -->
    </b-container>
</template>

<script>
import { Api } from '../Api'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      TotalMoney: 0,
      TotalChips: Cookies.get('total_chips'),
      YourMony: Cookies.get('money'),
      YourChips: Cookies.get('chips'),
      user_id: Cookies.get('_id'),
      e_bank_id: Cookies.get('e_bank_id'),
      exchange_chips: 0,
      exchange_money: 0,
      relationship: null

    }
  },
  mounted() {
    Api.get(`/users/${this.user_id}`).then(response => {
      Cookies.set('chips', response.data.chips)
      Cookies.set('money', response.data.money)
    }).catch(error => {
      alert('Backend error')
      console.log(error)
    })

    Api.get(`/e_banks/${this.e_bank_id}`).then(response => {
      this.TotalMoney = response.data.total_money
      this.TotalChips = response.data.total_chips
      Cookies.set('total_chips', this.TotalChips)
    }).catch(error => {
      alert('Backend error')
      console.error(error)
    })
  },
  methods: {

    exchangeMoney(event) {
      if ((this.TotalMoney >= 0) && (this.TotalChips >= 0) && (this.YourChips - this.exchange_money >= 0)) {
        this.TotalMoney = this.TotalMoney - Number(this.exchange_money)
        this.TotalChips = this.TotalChips + Number(this.exchange_money)
        this.YourMony = Number(this.YourMony) + Number(this.exchange_money)
        this.YourChips = Number(this.YourChips) - Number(this.exchange_money)
      } else {
        alert('Do not have enough money or chips to exchange')
      }
      const j = {
        total_money: this.TotalMoney,
        total_chips: this.TotalChips
      }
      const u = {
        money: this.YourMony,
        chips: this.YourChips,
        e_bank_id: this.e_bank_id
      }
      Api.patch(`/e_banks/${this.e_bank_id}`, j).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
      Api.patch(`/users/${this.user_id}`, u).then(response => {
        console.log(response)
        Cookies.set('money', this.YourMony)
        Cookies.set('chips', this.YourChips)
      }).catch(error => {
        console.log(error)
      })
      Api.post('/exchange', { user_id: this.user_id, volume: this.exchange_money }).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
      this.exchange_money = 0
    },
    exchangeChips(event) {
      if ((this.TotalMoney >= 0) && (this.TotalChips >= 0) && (this.YourMony - this.exchange_chips >= 0)) {
        this.TotalMoney = this.TotalMoney + Number(this.exchange_chips)
        this.TotalChips = this.TotalChips - Number(this.exchange_chips)
        this.YourMony = Number(this.YourMony) - Number(this.exchange_chips)
        this.YourChips = Number(this.YourChips) + Number(this.exchange_chips)
      } else {
        alert('Do not have enough money or chips to exchange')
      }
      const j = {
        total_money: this.TotalMoney,
        total_chips: this.TotalChips
      }
      const u = {
        money: this.YourMony,
        chips: this.YourChips,
        e_bank_id: this.e_bank_id
      }
      Api.patch(`/e_banks/${this.e_bank_id}`, j).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
      Api.patch(`/users/${this.user_id}`, u).then(response => {
        console.log(response)
        Cookies.set('money', this.YourMony)
        Cookies.set('chips', this.YourChips)
      }).catch(error => {
        console.log(error)
      })
      Api.post('/exchange', { user_id: this.user_id, volume: this.exchange_chips }).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
      this.exchange_chips = 0
    }
    // ,
    // getRelationship() {
    //   Api.get(`/e_banks/${this.e_bank_id}/users`).then(response => {
    //     this.relationship = response.data
    //   }).catch(error => {
    //     alert('Backend error')
    //     console.error(error)
    //   }) // this is for complete the requirement
    // }

  }
}
</script>
<style>
.ebank_info{
  color:brown;
}
h3{
  color: gold;
  font-family:monospace;
  font-style:italic;
}
.ebank_info p{
color: red;
}
</style>
