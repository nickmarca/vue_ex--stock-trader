<template>
  <div class="container">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded mb25">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link" v-if="signedIn">Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>

        <template v-if="signedIn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">End Day</a>
            </li>
            <li class="nav-item dropdown" v-dropdown>
              <a class="nav-link dropdown-toggle">{{user.displayName}}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

            <span class="navbar-text" style="padding: 0.5em;"><strong>Founds: ${{user.founds}} </strong></span>
          </ul>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['user', 'signedIn'])
    }
  }
</script>

<style lang="scss">
  .mb25 {
    margin-bottom: 25px;
  }
</style>