<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">

      <router-link class="navbar-brand" to="/">
        <i class="fab fa-erlang me-2"></i>- COMMERCE
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/products">Products</router-link>
          </li>
          
        </ul>

        <ul class="navbar-nav ms-auto">

          <li class="nav-item dropdown" v-if="loggedIn">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart"></i>
              <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-light text-dark">{{ cartItemCount }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
              <ShoppingCart />
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i> 
            </a>
            <ul class="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdownMenuLink">
              <li v-if="!loggedIn" class="dropdown-item  pt-3 "><router-link to="/login"><button class="btn btn-dark px-5 ">Logga in</button></router-link></li>
              <li v-if="loggedIn" class="dropdown-item "><router-link to="/orderHistory"><button class="btn btn-dark px-3">Aktuella ordrar</button></router-link></li>
              <li class="d-flex justify-content-center mb-2"><button @click="handleLogout()" v-if="loggedIn" class="btn btn-dark px-5 ">Logout</button></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCart from '../shoppingCart/ShoppingCart'
 
 
export default {
  name: 'Navbar',
  components: {
   ShoppingCart
  },
  computed: {
    ...mapGetters(['loggedIn', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout(){
      this.logout()
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  min-width: 445px;
}
.navbar {background-color: rgba(0, 0, 0, 0.2);}
</style>