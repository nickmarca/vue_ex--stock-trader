<template>
  <div class="panel" :class="{blue: mode == 2}">

    <h3 v-if="mode == 2" class="panel-title">{{name}} <span>(Price: {{price}} | Quantity: {{quantity}})</span></h3>
    <h3 v-else class="panel-title">{{name}} <span>(Price: {{price}})</span></h3>

    <div class="panel-content">
      <form @submit.prevent="mode == 2 ? sellStock({stock: {id: id}, quantity: tradingQuantity}) :
        buyStock({stock: {id: id}, quantity: tradingQuantity})">
        <div class="panel-form">
          <div class="panel-form__input">
            <div class="form-group">
              <input type="text" id="quantity" placeholder="Quantity" class="form-control form-control-sm" v-model="tradingQuantity">
            </div>
          </div>

          <div class="panel-form__submit">
            <button v-if="mode == 2" type="submit" class="btn btn-sm btn-danger">Sell</button>
            <button v-else type="submit" class="btn btn-sm btn-success">Buy</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    props: ['name', 'price', 'quantity', 'mode', 'id'],
    data() {
      return {
        tradingQuantity: null
      }
    },
    methods: {
      ...mapMutations(['sellStock', 'buyStock'])
    }
  }
</script>