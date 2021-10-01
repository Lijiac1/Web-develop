<template>
  <div>

    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username: "
        label-for="input-1"
        description="We'll never share your Username with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          placeholder="Enter the Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Password: "
        label-for="input-1"
        description="We'll never share your Password with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          placeholder="Enter the Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <p>
            Already have an account? <router-link to="/"
              >click here</router-link
            >
            <center>
            <b-button type="submit" variant="outline-primary" >Submit</b-button>
      </center>
      </p>
    </b-form>

  </div>
</template>

<script>
import { Api } from '../Api'
import router from 'vue-router'

export default {

  data() {
    return {
      form: {
        username: '',
        password: '',
        name: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      Api.post('/users', this.form).then(response => {
        console.log(response)
        alert('Register successfully')
        router.push('login')
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
