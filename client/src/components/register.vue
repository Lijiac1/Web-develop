<template>
  <div>

    <b-form>
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
            <!-- <b-button type="submit" variant="outline-primary" @click="onSubmit" >Submit</b-button> -->
            <b-button type="submit" variant="outline-primary" @click="postRelationship">Submit</b-button>
      </center>
      </p>
    </b-form>

  </div>
</template>

<script>
import { Api } from '../Api'

export default {

  data() {
    return {
      form: {
        username: '',
        password: null,
        name: '',
        chips: 0,
        money: 0
      },
      e_bank_id: null
    }
  },
  mounted() {
    Api.get('/e_banks').then(response => {
      this.e_bank_id = response.data.e_banks[response.data.e_banks.length - 1]._id
    }).catch(error => {
      alert('Backend error')
      console.error(error)
    })
  },
  methods: {
    // onSubmit(event) {
    //   event.preventDefault()
    //   Api.post('/users', this.form).then(response => {
    //     if (response.status === 201) { alert('Register successfully') }
    //     console.log(response)
    //   }).catch(error => {
    //     alert('Backend error')
    //     console.error(error)
    //   })
    // },
    postRelationship(event) {
      event.preventDefault()
      Api.post(`/e_banks/${this.e_bank_id}/users`, this.form).then(response => {
        if (response.status === 201) { alert('Register successfully') }
        console.log(response.data)
      }).catch(error => {
        alert('Backend error')
        console.error(error)
      })
    }
  }
}
</script>
