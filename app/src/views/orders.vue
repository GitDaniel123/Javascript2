<template>
  <div class="container">
    <article class="card">
        <h1 class="card-header text-center "> Order </h1>
        <div class="card-body">
            
            
            <shopping-cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item"/>
            
            <hr>
            
            <!-- <ul class="row">
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <div class="aside"><img src="https://i.imgur.com/iDwDQ4o.png" class="img-sm border"></div>
                        <figcaption class="info align-self-center">
                            <p class="title">Dell Laptop with 500GB HDD <br> 8GB RAM</p> <span class="text-muted">$950 </span>
                        </figcaption>
                    </figure>
                </li>
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <div class="aside"><img src="https://i.imgur.com/tVBy5Q0.png" class="img-sm border"></div>
                        <figcaption class="info align-self-center">
                            <p class="title">HP Laptop with 500GB HDD <br> 8GB RAM</p> <span class="text-muted">$850 </span>
                        </figcaption>
                    </figure>
                </li>
                <li class="col-md-4">
                    <figure class="itemside mb-3">
                        <div class="aside"><img src="https://i.imgur.com/Bd56jKH.png" class="img-sm border"></div>
                        <figcaption class="info align-self-center">
                            <p class="title">ACER Laptop with 500GB HDD <br> 8GB RAM</p> <span class="text-muted">$650 </span>
                        </figcaption>
                    </figure>
                </li>
            </ul> -->
            <hr>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <router-link to="/products" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Back to products</router-link>
                </div>
                <div>
                    <button v-if="shoppingCart.length < 1" class="btn btn-danger" disabled >Order is empty</button>
                    <router-link to="/orderconfirmed" v-else class="btn btn-danger" v-on:click.native="orders">Confirm order</router-link>
                    
                    

                </div>
            </div>
        </div>
    </article>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCartProduct from '../components/shoppingCart/ShoppingCartProduct.vue'
export default {
  components: { ShoppingCartProduct },
  computed: {
      ...mapGetters(['shoppingCart','user','count'])
  },
  methods: {
      ...mapActions(['confirmOrder','cleanCartList']),
      orders(){
          let order1 = {
              email: this.user,
              list: this.shoppingCart,
              price: this.count
          }
          this.confirmOrder(order1)
          setTimeout(this.cleanCartList, 1000)
      }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body {
    background-color: #eeeeee;
    font-family: 'Open Sans', serif
}

.container {
    margin-top: 50px;
    margin-bottom: 50px
}

.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.10rem
}

.card-header:first-child {
    border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.track {
    position: relative;
    background-color: #ddd;
    height: 7px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    margin-top: 50px
}

.track .step {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 25%;
    margin-top: -18px;
    text-align: center;
    position: relative
}

.track .step.active:before {
    background: #FF5722
}

.track .step::before {
    height: 7px;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 18px
}

.track .step.active .icon {
    background: #ee5435;
    color: #fff
}

.track .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 100%;
    background: #ddd
}

.track .step.active .text {
    font-weight: 400;
    color: #000
}

.track .text {
    display: block;
    margin-top: 7px
}

.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.itemside .aside {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.img-sm {
    width: 80px;
    height: 80px;
    padding: 7px
}

ul.row,
ul.row-sm {
    list-style: none;
    padding: 0
}

.itemside .info {
    padding-left: 15px;
    padding-right: 7px
}

.itemside .title {
    display: block;
    margin-bottom: 5px;
    color: #212529
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

.btn-warning {
    color: #ffffff;
    background-color: #ee5435;
    border-color: #ee5435;
    border-radius: 1px
}

.btn-warning:hover {
    color: #ffffff;
    background-color: #ff2b00;
    border-color: #ff2b00;
    border-radius: 1px
}
</style>