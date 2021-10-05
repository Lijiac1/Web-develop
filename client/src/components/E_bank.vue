<template>
    <b-container class="mt-5">
        <b-row class="mt-5">
            <b-col>
                <b-card
                border-variant="primary"
                header="E-bank info"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-5"
                >
                <b-row>
                    <b-col><label for="textarea-small">Total money:</label></b-col>
                    <b-col>{{TotalMoney}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">Total chips:</label></b-col>
                    <b-col>{{TotalChips}}</b-col>

                </b-row>
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

    </b-container>
</template>

<script>
import { Api } from '../Api'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      TotalMoney: 0,
      TotalChips: 0,
      YourMony: 0,
      YourChips: 0,
      user_id: null,
      e_bank_id: null,
      exchange_chips: 0,
      exchange_money: 0

    }
  },
  mounted() {
    this.YourMony = Cookies.get('money')
    this.YourChips = Cookies.get('chips')
    this.user_id = Cookies.get('_id')
    // Api.get('v1/users/:id', this.user_id).then(response => {
    // }).catch(error => {
    //   console.error(error)
    // })
    Api.get('/e_banks').then(response => {
      this.TotalMoney = response.data.e_banks[1].total_money
      this.TotalChips = response.data.e_banks[1].total_chips
      this.e_bank_id = response.data.e_banks[1]._id
    }).catch(error => {
      console.error(error)
    })
  },
  methods: {

    exchangeMoney(event) {
      this.TotalMoney = this.TotalMoney - this.exchange_money
      this.exchange_chips = this.TotalChips + this.exchange_money
      Api.patch(`/e_banks/${this.e_bank_id}`, this.total_money).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
    },
    exchangeChips(event) {
      this.total_chips = this.total_chips - this.exchange_chips
      this.exchange_money = this.total_money + this.exchange_chips
      Api.patch(`/e_banks/${this.e_bank_id}`, this.total_chips).then(response => {
        console.log(response)
      }).catch(error => {
        console.error(error)
      })
    }

  }
}
</script>
