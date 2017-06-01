import VueRouter from 'vue-router';
import Vue from 'vue'

import App from './App.vue'
import {routes} from './routes';
import {store} from './store/store';

import './styles.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.directive('dropdown', {
  bind(el, binding, vnode) {
    el.onclick = () => {
      if(el.classList.contains('open')) return el.classList.remove('open');
      return el.classList.add('open');
    };
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted() {
    window.addEventListener('click', function(event) {
      if(event.target.matches('.dropdown-toggle')) return;

      const dropdowns = [].slice.call(document.getElementsByClassName('dropdown'));
      dropdowns.map(dropdown => {
        if(dropdown.classList.contains('open')) dropdown.classList.remove('open');
      });
    });
  }
});
