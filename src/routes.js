import Home from './Home.vue';
import Stocks from './Stocks.vue';
import Portfolio from './Portfolio.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stocks },
  { path: '/portfolio', component: Portfolio }
];