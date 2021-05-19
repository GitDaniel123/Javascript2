<template>
  <div class="cart-item">
      <div class="p-2 d-flex justify-content-between align-items-center">

          <div class="d-flex align-items-center">
              <img :src="item.product.image" alt="" class="img-fluid image-width" >
              <div class="ms-2">
                  
                  <div>
                      <strong>{{ item.product.name }}</strong>
                  </div>
                  <div>
                      <small>{{ item.quantity }} x {{ item.product.price }}</small>
                    </div>

              </div>

          </div>

          <div>
              <div class="btn-group btn-group-sm">

                  <button class="btn btn-danger me-2" @click.stop="removeProductFromCart(item)">-</button>
                  <button class="btn btn-danger" @click.stop="addProductToCart(item)">+</button>

              </div>
          </div>

      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['item'],
    methods: {
        ...mapActions(['addProductToCart', 'removeProductFromCart'])
    },
    computed: {
        ...mapGetters(['products'])
    }
}
</script>

<style scoped>
.image-width {
    width: 120px;
}



</style>