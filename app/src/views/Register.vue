<template>
  <div class="container mt-5">
  <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
      <h4 class="text-center">Register</h4>

         <div class="row">
             <div class="col">
                <div class="mb-4 text-center">
                    <label for="firstName" class="form-label d-flex justify-content-start">Firstname</label>
                    <input type="firstName" id="firstName" class="form-control" v-model="user.firstName">
                </div>
             </div>
         
         
             <div class="col">
                <div class="mb-4 text-center">
                    <label for="lastName" class="form-label d-flex justify-content-start">Lastname</label>
                    <input type="lastName" id="lastName" class="form-control" v-model="user.lastName">
                </div>
             </div>
         

        </div>
      <div class="mb-4 text-center">
          <label for="email" class="form-label d-flex justify-content-start">Email address</label>
          <input type="email" id="email" class="form-control" v-model="user.email">
      </div>
      <div class="mb-4 text-center">
          <label for="password" class="form-label d-flex justify-content-start">Password</label>
          <input type="password" id="password" class="form-control" v-model="user.password">
      </div>
      <button class="btn btn-danger btn-block">Register</button>

      <div class="text-center">
          <small>Already a member?<router-link to="/login">login</router-link></small>
      </div>
  </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user:{
                firstName:'',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
        ...mapActions(['register']),
        onSub() {
            if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
                this.register(this.user)
            }
        }
    }
}
</script>

<style>

</style>