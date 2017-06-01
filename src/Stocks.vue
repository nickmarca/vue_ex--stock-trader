<template>
  <div class="row justify-content-sm-center justify-content-md-start">
    <div class="col-md-6 col-sm-12" v-for="stock in stocks">
      <st-stock :name="stock.name" :price="stock.price" :id="stock.id"></st-stock>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default {
    computed: mapGetters(['stocks']),
    components: {
      stStock: Stock
    }
  }
</script>
