<template>
  <div>
      <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product_id" :item="item"/>

      <div v-if="shoppingCart.lenght < 1">
          <div class="p-2 p-3 d-flex justify-content-center align-items-center border-bottom">
              Your shopping cart is empty
              <div class="dropdown-divider">

              </div>
          </div>
      </div>

      <div class="p-3 d-flex justify-content-between align-items-center">
          <div>
              <div class="total-price">
                  TOTAL: <span>{{ count }}</span>
              </div>
              <small class="text-muted"> Inkl. moms</small>
          </div>
          <router-link to="/order" data-abc="true">  <button class="btn btn-danger">GO TO CART</button> </router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ShoppingCartProduct from '../shoppingCart/ShoppingCartProduct'

export default {
    name: 'ShoppingCart',
    components: {
        ShoppingCartProduct
    },
    computed: {
        ...mapGetters(['shoppingCart', 'count'])
    }
}
</script>

<style>

</style>