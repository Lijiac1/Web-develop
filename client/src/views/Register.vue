<template>
  <div class="Register">
        <b-container>
            <b-card
            border-variant="primary"
            header="Register"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
            tag="article"
            style="min-width: 20rem"
            class="mt-5"
            >
                <Register />
            </b-card>
        </b-container>
  </div>
</template>

<script>
import Register from '../components/register'
export default {
  components: {
    Register: Register
  }
}
</script>
