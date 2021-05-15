<!-- 移动端侧边导航栏 -->
<template>
  <div class="m-nav">
    <div class="top">
      <i class="iconfont icon-guanbi"
         style="font-size: 20px;"
         @click="handleCloseNav"></i>
      <img :src="logoPath"
           alt=""
           srcset="">
    </div>
    <nav class="nav"
         @click="handleCloseNav">
      <router-link to="./index"
                   class="font-colorfff">首页</router-link>
      <router-link to="./service"
                   class="font-colorfff">服务</router-link>
      <router-link to="./case"
                   class="font-colorfff">案例</router-link>
      <router-link to="./news"
                   class="font-colorfff">新闻</router-link>
      <router-link to="./cantact"
                   class="font-colorfff">联系</router-link>
    </nav>
  </div>
</template>

<script>
import logoWhite from '@common/imgs/Logo_fb.png'
export default {
  name: 'navSide',
  data () {
    return {
      logoPath: logoWhite
    }
  },
  methods: {
    handleCloseNav () {
      this.$emit('handleCloseNav', false)
    }
  }
}
</script>
<style lang='less' scoped>
@media only screen and (max-width: 1000px) {
  .m-nav {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: #000;
    font-size: 12px;
    color: #b3b3b3;
    color: #fff;
    .top {
      height: 44px !important;
      border-bottom: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img {
        height: 20px;
      }
      i {
        position: absolute;
        top: 10px;
        left: 20px;
      }
    }
    .nav {
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      a {
        width: 100%;
        padding: 14px 0;
        border-bottom: 1px solid #333;
        color: #b3b3b3;
      }
      .router-link-active {
        color: #ffffff;
      }
    }
  }
}
</style>
