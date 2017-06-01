<template>
  <div class="row justify-content-sm-center justify-content-md-start">
    <div class="col-md-6 col-sm-12" v-for="userStock in userStocks">
      <st-stock :name="userStock.stock.name" mode="2" :price="userStock.stock.price" :quantity="userStock.quantity" :id="userStock.stock.id"></st-stock>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default {
    computed: mapGetters([
      'userStocks'
    ]),
    components: {
      stStock: Stock
    }
  }
</script>