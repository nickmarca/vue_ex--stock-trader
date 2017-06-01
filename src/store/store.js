import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    signedIn: true,
    user: {
      displayName: 'Nicholas',
      founds: 216845
    },
    userStocks: [
      {
        stockId: '1',
        quantity: 10
      },
      {
        stockId: '2',
        quantity: 7
      }
    ],
    stocks: [
      {
        id: '1',
        name: 'Google',
        price: 80
      },
      {
        id: '3',
        name: 'Facebook',
        price: 48
      },
      {
        id: '2',
        name: 'BMW',
        price: 54
      },
      {
        id: '4',
        name: 'Amazon',
        price: 46
      },
      {
        id: '5',
        name: 'Cannon',
        price: 23
      }
    ]
  },
  getters: {
    user: state =>  state.user,
    signedIn: state => state.signedIn,
    userStocks: state => state.userStocks.map(userStock => {
      const stock = state.stocks.find(s => s.id === userStock.stockId);
      return {
        ...userStock,
        stock
      }
    }),
    stocks: state => state.stocks
  },
  mutations: {
    buyStock: (state, payload) => {
      const quantityToBuy = parseInt(payload.quantity);
      const stockToBuy = state.userStocks.find(userStock => userStock.stockId === payload.stock.id);
      const stockFromMarket = state.stocks.find(s => s.id === payload.stock.id);

      if((quantityToBuy * stockFromMarket.price) > state.user.founds) return console.log('You dont have enough founds');

      stockToBuy ? stockToBuy.quantity += quantityToBuy :
      state.userStocks = [...state.userStocks, {stockId: payload.stock.id, quantity: quantityToBuy}];

      state.user.founds = state.user.founds - (stockFromMarket.price * quantityToBuy);
    },
    sellStock: (state, payload) => {
      const quantityToSell = parseInt(payload.quantity);
      const stockToSell = state.userStocks.find(userStock => userStock.stockId === payload.stock.id);

      if(stockToSell.quantity < quantityToSell)
        return console.log('You dont have this stock quantity to sell');
      else if (stockToSell.quantity > quantityToSell)
        (stockToSell.quantity -= quantityToSell);
      else if (stockToSell.quantity === quantityToSell)
        state.userStocks = state.userStocks.filter(userStock => !(userStock.stockId === payload.stock.id));

      return state.user.founds = state.user.founds + (state.stocks.find(s => s.id === payload.stock.id).price * quantityToSell);
    }
  }
});