<template>
<div class="container">    
    <order-card-deck />
</div>
</template>
 
<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCardDeck from '../components/order/OrderCardDeck.vue'



 
export default {
  components: {OrderCardDeck  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
      ...mapActions(['getOrders']),
  },
  created() {
      this.getOrders(this.user)
  }
}
</script>