<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/car">car</router-link>|
      <router-link to="/addNum">addNum</router-link>|
       <router-link to="/dataFlow">dataFlow</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
      beforeCreate(){
        this.$store.dispatch('car/initGoods')
      }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
