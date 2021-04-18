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
<style lang='less'>
#app {
  font-family : Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing : grayscale;
  text-align : center;
  color : #2C3E50;
  position : relative;
  .home-nav {
    position : fixed;
    top : 0;
    left : 0;
  }
  .margin-top {
    margin-top : 60px;
  }
  .el-header, .home-main {
    padding : 0;
  }
}
.margin-top60 {
  margin-top : 60px;
}

</style>
