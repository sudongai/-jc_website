<template>
  <div id="app">
    <header class="home-nav"
            height="60px">
      <router-view name="nav" />
    </header>
    <div class="home-main">
      <router-view />
    </div>
  </div>
</template>
<script>
import '@common/font/iconfont.css'
import '@common/css/common.less'
export default {
  created () {

  }
}
</script>
<style lang='less'>
#app {
  position: relative;
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
  }
  .margin-top {
    margin-top: 60px;
  }
  .el-header,
  .home-main {
    padding: 0;
  }
}
.margin-top60 {
  margin-top: 60px;
}
.iconfont {
  color: #fff;
}
</style>
