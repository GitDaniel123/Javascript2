<template>
  <div>
      <h1 class="text-center text-danger">YOUR ORDERS</h1>
      <Order-card v-for="order in orders" :key="order._id" :order="order" />
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'
import OrderCard from './OrderCard.vue'
 
export default {
  components: { OrderCard },
 
computed: {
  ...mapGetters(['orders'])
}
 
}
</script>
 
<style>
 
</style>