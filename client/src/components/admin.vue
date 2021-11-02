<template >
    <b-container class="mt-3">.
        <h3>E_bank</h3>
        <b-row>
            <b-col>
              <b-card class="mt-5" no-body>
               <b-nav pills card-header slot="header" >
                 <b-col><b-nav-item>Total Money</b-nav-item></b-col>
                 <b-col><b-nav-item>Total Chips</b-nav-item></b-col>
                 <b-col><b-nav-item>Money In</b-nav-item></b-col>
                 <b-col><b-nav-item>Money Out</b-nav-item></b-col>
                 <b-col><b-nav-item>Chips In </b-nav-item></b-col>
                 <b-col><b-nav-item>Chips Out</b-nav-item></b-col>
                 <b-col></b-col>
                 <b-col></b-col>
               </b-nav>
               <b-card
                border-variant="primary"
                header-bg-variant="primary"
                header-text-variant="white"
                style="position:relative; height: 234px; overflow-y:scroll;"
                >
                <b-row v-for="eBank in eBanks" :key="eBank.id">
                  <b-col>{{eBank.total_money}}</b-col>
                  <b-col>{{eBank.total_chips}}</b-col>
                  <b-col>{{eBank.money_in}}</b-col>
                  <b-col>{{eBank.money_out}}</b-col>
                  <b-col>{{eBank.chips_in}}</b-col>
                  <b-col>{{eBank.chips_out}}</b-col>
                  <b-col><b-button variant="outline-primary" @click="select(eBank._id)">Select</b-button></b-col>
                  <b-col><b-button variant="outline-primary" @click="checkUsers(eBank._id)">Users</b-button></b-col>
                </b-row>
                </b-card>
              </b-card>
            </b-col>

            </b-row>
            <b-row class="ebank_info">
            <b-col>
                <b-card
                border-variant="primary"
                header="E-bank info"
                header-bg-variant="primary"
                header-text-variant="white"
                class="mt-3"
                style="min-height: 234px;"
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
                    <b-col><label for="textarea-small">MoneyIn:</label></b-col>
                    <b-col>{{MoneyIn}}</b-col>

                </b-row>
                <b-row>
                    <b-col><label for="textarea-small">MoneyOut:</label></b-col>
                    <b-col>{{MoneyOut}}</b-col>

                </b-row>
                </b-card>
            </b-col>

        </b-row>

        <b-row class="mt-5" align-v="center">
            <b-col><label for="textarea-small">Modify TotalMoney</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          min="0"
          v-model="ModifyMoney"
        ></b-form-input></b-col>
        <b-col><b-button variant="outline-primary" @click="modifyMoney">Confirm</b-button></b-col>
        </b-row>
        <b-row class="mt-3" align-v="center">
            <b-col><label for="textarea-small">Modify TotalChips</label></b-col>
        <b-col><b-form-input
          id="input-1"
          type="number"
          min="0"
          v-model="ModifyChips"
        ></b-form-input></b-col>
        <b-col><b-col><b-button variant="outline-primary" @click="modifyChips">Confirm</b-button></b-col></b-col>
        </b-row>
        <b-row>
            <b-col>
        <b-card title="Create ebank" class = "mt-2" align-v="center">
          <b-row>
          <b-col>TotalMoney:{{relationship}}</b-col><b-col><b-form-input
          id="input-2"
          type="number"
          min="0"
          v-model="TotalMoneyInput"
        ></b-form-input></b-col>
          </b-row>
          <b-row>
                <b-col>TotalChips:{{relationship}}</b-col><b-col><b-form-input
          id="input-2"
          type="number"
          min="0"
          v-model="TotalChipsInput"
        ></b-form-input></b-col>
          </b-row>
          <b-button class = "mt-2" variant="outline-primary" @click="createEbank">Create</b-button>
        </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-button class = "mt-2" variant="outline-primary" @click="deleteEbank">Delete eBank</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { Api } from '../Api'

export default {
  data() {
    return {
      TotalMoney: 0,
      TotalChips: 0,
      ModifyMoney: 0,
      ModifyChips: 0,
      TotalMoneyInput: 0,
      TotalChipsInput: 0,
      MoneyIn: 0,
      MoneyOut: 0,
      ChipsIn: 0,
      ChipsOut: 0,
      eBank_id: null,
      users: [],
      eBanks: []

    }
  },
  mounted() {
    Api.get('/e_banks').then(response => {
      this.eBanks = response.data.e_banks
    })
  },
  methods: {
    modifyMoney(event) {
      Api.patch(`/e_banks/${this.eBank_id}`, { total_money: this.ModifyMoney }).then(response => {
        console.log(response.status)
        this.TotalMoney = this.ModifyMoney
        this.ModifyMoney = 0
        return Api.get('/e_banks')
      }).then(response => { this.eBanks = response.data.e_banks }
      ).catch(error => {
        console.log(error)
      })
    },
    modifyChips(event) {
      Api.patch(`/e_banks/${this.eBank_id}`, { total_chips: this.ModifyChips }).then(response => {
        console.log(response.status)
        this.TotalChips = this.ModifyChips
        this.ModifyChips = 0
        return Api.get('/e_banks')
      }).then(response => { this.eBanks = response.data.e_banks }
      ).catch(error => {
        console.log(error)
      })
      Api.get('/e_banks').then(response => {
        this.eBanks = response.data.e_banks
      })
    },
    createEbank(event) {
      const b = {
        total_money: this.TotalMoneyInput,
        total_chips: this.TotalChipsInput,
        money_in: 0,
        money_out: 0,
        chips_in: 0,
        chips_out: 0
      }
      Api.post('/e_banks', b).then(response => {
        if (response.status === 201) {
          alert('create successfully')
        } else {
          alert('fail to creat ebank')
        }
        return Api.get('/e_banks')
      }).then(response => {
        this.eBanks = response.data.e_banks
      }).then(error => {
        console.log(error)
      })
    },
    deleteEbank(event) {
      Api.delete(`/e_banks/${this.eBank_id}`).then(response => {
        if (response.status === 204) {
          alert('Delete successfully')
        } else {
          alert('fail to delete')
        }
        return Api.get('/e_banks')
      }).then(response => {
        this.eBanks = response.data.e_banks
      }).catch(error => {
        console.log(error)
      })
    },
    select(id) {
      this.eBank_id = id
      Api.get(`/e_banks/${this.eBank_id}`).then(response => {
        this.TotalMoney = response.data.total_money
        this.TotalChips = response.data.total_chips
        this.TotalMoneyInput = response.data.money_in
        this.TotalChipsInput = response.data.money_out
      })
    },
    checkUsers(ebankid) {
      Api.get(`/e_banks/${ebankid}/users/name`).then(response => {
        this.users = JSON.stringify(response.data)
        alert(this.users)
      })
    }
  }
}
</script>
