<template>
    <div class="mt-5" >
        <b-container>
            <b-row>
                <b-col></b-col>
                <b-col class="mt-5">
                    <b-card
                    border-variant="primary"
                    header="Welcome"
                    header-bg-variant="primary"
                    header-text-variant="white"
                    align="center"
                    tag="article"
                    style="min-width: 20rem"
                    class="mt-5"
                    >
                    <b-row class="my-3" v-for="item in form" :key="item.id">
                        <b-col sm="12">
                            <label :for="item.id">{{item.text}}:</label>
                        </b-col>
                        <b-col sm="12">
                            <b-form-input :id="item.id" :type="item.type" v-model="item.value" :placeholder="item.placeholder"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-button variant="outline-primary" to="/register">Register</b-button>
                    <b-button class="ml-2" variant="outline-primary" @click="login()">Login</b-button>
                    </b-card>
                </b-col>
                <b-col></b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import { Api } from '../Api'
import Cookies from 'js-cookie'

export default {
  name: '',
  data() {
    return {
      form: [
        { id: 'user', text: 'Username', type: 'text', value: '', placeholder: 'Enter the Username' },
        { id: 'password', text: 'Password', type: 'text', value: '', placeholder: 'Enter the Password' }

      ],
      islogin: false
    }
  },
  methods: {

    login(event) {
      Api.post('/users/login', { username: this.form[0].value, password: this.form[1].value }).then(response => {
        if (response.status === 200) {
          if (response.data.username === 'admin') {
            this.$router.push('/Admin')
          } else {
            this.islogin = true
            Cookies.set('_id', response.data._id)
            Cookies.set('username', response.data.username)
            Cookies.set('chips', response.data.chips)
            Cookies.set('money', response.data.money)
            Cookies.set('islogin', this.islogin)
            Cookies.set('e_bank_id', response.data.e_bank_id)
            this.$router.push('/home')
          }
        } else {
          alert('Wrong password or username or backend error')
        }
      }).catch(error => {
        console.log(error)
        alert('Wrong password or username or backend error')
      })
    }
  }

}
</script>
