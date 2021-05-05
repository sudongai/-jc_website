<template>
<div class="page-box">
  <div class="nav-box">
    <!-- 首页是红色的logo-->
    <img v-if="$route.path==='/index'" :src="whiteLogo" class="img img-private">
    <!-- 除首页，详情页外，其它页面是白色logo  -->
    <img v-else-if="$route.path!=='/index' && $route.path!=='/case_detail' && $route.path!=='/news_detail'" :src="redLogo" class="img img-private">
    <!-- 详情页专属 -->
    <div v-else-if="$route.path!=='/case_detail' || $route.path!=='/news_detail'" >
      <!-- 通过css媒体查询控制导航栏最左侧，移动端显示回退按钮，pc端显示logo -->
      <img :src="redLogo" class="case-detail-img case-detail-img-private">
      <div class="detail-back-private">
        <i class="iconfont icon-fanhui icon-fanhui-private"></i>
        <el-button class="case-detail-title-private" type="text" @click="$router.go(-1)">
          {{$route.path==='/news_detail'?'新闻详情':($route.path==='/case_detail'?'案例详情':'')}}
        </el-button>
      </div>
    </div>
    <!-- pc端导航栏 -->
    <nav class="nav nav-private">
      <router-link to="/index" :class="{'nav-switch-sty': $route.path==='/index'}">首页</router-link>
      <router-link to="/service" :class="{'nav-switch-sty': $route.path==='/service'}">服务</router-link>
      <router-link to="/case" :class="{'nav-switch-sty': $route.path==='/case'}">案例</router-link>
      <router-link to="/news" :class="{'nav-switch-sty': $route.path==='/news'}">新闻</router-link>
      <router-link to="/contact" :class="{'nav-switch-sty': $route.path==='/contact'}">联系</router-link>
    </nav>
    <!-- 移动端导航入口 -->
    <i class="iconfont icon-gengduo more-icon-private" @click="open_mobile_menu"></i>
  </div>
  <!-- 移动端导航抽屉 -->
  <el-drawer
    :visible.sync="drawer"
    class="drawer-private"
    :close-on-press-escape="false"
    :modal="false"
    :show-close="false">
    <div slot="title">
      <i class="iconfont icon-guanbi" @click="drawer_close"></i>
      <img :src="whiteLogo">
    </div>
    <nav class="nav-mobile-private">
      <span class="a" @click="go_to_route('/index')">首页</span>
      <span class="a" @click="go_to_route('/service')">服务</span>
      <span class="a" @click="go_to_route('/case')">案例</span>
      <span class="a" @click="go_to_route('/news')">新闻</span>
      <span class="a" @click="go_to_route('/contact')">联系</span>
    </nav>
  </el-drawer>
</div>
</template>

<script>
import whiteLogo from '@common/imgs/Logo_fb.png';
import redLogo from '@common/imgs/Logo.png';

export default {
  data () {
    return {
      whiteLogo,
      redLogo,
      drawer: false
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    open_mobile_menu () {
      this.drawer = true
    },
    drawer_close () {
      this.drawer = false
    },
    go_to_route (route) {
      this.$router.push(route)
      this.drawer = false
    }
  },
}
</script>

<style lang='less' scoped>
.nav-box {
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav {
    display: inline-flex;
    align-items: center;
    a {
      display: inline-block;
      text-align: center;
    }
  }
}
@media screen and (min-width: 1000px) {
  .nav-box {
    padding: 0 120px;
    height: 65px;
    .img {
      height: 40px;
    }
    .case-detail-img {
      height: 40px; // PC端展示详情logo图标
    }
    .detail-back-private{
      display: none;
    }
    .more-icon-private {
      display: none; // PC端隐藏Menu图标
    }
    .nav {
      a {
        width: 75px;
        height: 65px;
        line-height: 65px;
        color: #fff;
      }
      .nav-switch-sty {
        background-color: #AF001E;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .drawer-private {
    /deep/ .el-drawer__container {
      div {
        width: 100%!important;
        background-color: #000;
        header {
          margin-bottom: 0;
          padding: 0;
          div {
            height: 45px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #B3B3B3;
            img {
              height: 24px;
              margin-left: 118px;
            }
          }
        }
        section {
          .nav-mobile-private {
            width: 100%;
            box-sizing: border-box;
            padding: 0 30px;
            display: inline-flex;
            flex-direction: column;
            .a {
              display: block;
              height: 45px;
              line-height: 45px;
              font-size: 12px;
              color: #B3B3B3;
              border-bottom: 1px solid #B3B3B3;
            }
          }
        }
      }
    }
  }
  .nav-box {
    padding: 0 15px;
    height: 45px;
    .img-private {
      width: 80px;
      height: 24px;
    }
    .case-detail-img-private {
      display: none; // 移动端隐藏详情logo图标
    }
    .detail-back-private{
      display: flex;
      justify-content:flex-start;
      align-items: center;
      .icon-fanhui-private{
        font-size: 14px; 
        font-weight: bold; 
        margin-right: 10px;
      }
      .case-detail-title-private {
        font-size: 14px;
        color: #333333;
      }
    }
    .nav-private {
      display: none; // 移动端隐藏Pc端的导航
    }
    .more-icon-private {
      display: block;
      color: #fff;
    }
  }
}
</style>
