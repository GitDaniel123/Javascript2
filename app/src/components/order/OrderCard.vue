<template>
  <div>
      <div class="card text bg-light border p-2">
          <h1>OrderID: {{ order._id }}</h1>
          <h2>{{ order.email }}</h2>
            <order-details v-for="(product, index) in order.list" :key="index" :product="order.list[index]" />
          <h3>Total: {{ order.price }} SEK</h3>
      
      </div>
      <div class="pb-2">

      </div>

      
  </div>
  
</template>
 
<script>

import OrderDetails from './OrderDetails.vue'
export default {
  name: 'OrderCard',
  props: ['order'],
  components: {
    OrderDetails
    
  }
}
</script>
 
<style>
 
</style>