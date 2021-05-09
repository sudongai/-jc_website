<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view class="container"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState () {
      sessionStorage.setItem('storeState', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style lang='less'>
@media only screen and (min-width: 1000px) {
  .container {
    margin-top: 65px;
  }
}
@media only screen and (max-width: 1000px) {
  .container {
    margin-top: 44px;
  }
}
</style>
