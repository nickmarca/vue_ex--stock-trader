<template>
  <div id="app">
    <st-header></st-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue';

  export default {
    name: 'app',
    components: {
      stHeader: Header
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
