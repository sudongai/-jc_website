<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less'>
.container {
  margin-top: 65px;
}
</style>
