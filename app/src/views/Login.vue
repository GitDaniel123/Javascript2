<template>
  <div class="container mt-5">
  <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
      <h4 class="text-center">Sign in</h4>

      <div class="mb-4 text-center">
          <label for="email" class="form-label d-flex justify-content-start">Email address</label>
          <input type="email" id="email" class="form-control" v-model="email">
      </div>
      <div class="mb-4 text-center">
          <label for="password" class="form-label d-flex justify-content-start">Password</label>
          <input type="password" id="password" class="form-control" v-model="password">
      </div>
      <h6 class="text-danger text-center" > {{error}}</h6>
      <button class="btn btn-danger btn-block">Sign in</button>

      <div class="text-center">
          <small>Not a member? <router-link to="/register">Register</router-link></small>
      </div>
  </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters(['error'])
    },
    methods: {
        ...mapActions(['login']),
        onSub() {
            if(this.email !== '' && this.password !== '') {
                let user = {
                    email: this.email,
                    password: this.password
                }
                this.login(user)
                console.log(user)
            }
        }
    }
}
</script>

<style>

</style>