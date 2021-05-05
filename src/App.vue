<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view class="container"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
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
