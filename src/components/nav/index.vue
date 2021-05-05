<template>
  <div class="page-box">
    <div class="nav-bar-box"
         :class="[$route.path !== '/index' ? 'not-index-page' : '' , $route.path === '/index' && navbg ? 'navbg' : '']">
      <!-- 首页是红色的logo-->
      <img v-if="$route.path==='/index'"
           :src="whiteLogo"
           class="img">
      <!-- 除首页，详情页外，其它页面是白色logo  -->
      <img v-else-if="$route.path!=='/index' && $route.path!=='/case_detail' && $route.path!=='/news_detail'"
           :src="redLogo"
           class="img">
      <!-- 详情页导航栏专属 -->
      <div v-else-if="$route.path!=='/case_detail' || $route.path!=='/news_detail'">
        <!-- 通过css媒体查询控制导航栏最左侧，移动端显示回退按钮，pc端显示logo -->
        <img :src="redLogo"
             class="case-detail-img">
        <div class="detail-back">
          <i class="iconfont icon-fanhui"
             @click="$router.go(-1)"></i>
          <el-button class="case-detail-title"
                     type="text">
            {{$route.path==='/news_detail'?'新闻详情':($route.path==='/case_detail'?'案例详情':'')}}
          </el-button>
        </div>
      </div>
      <!-- pc端导航栏 -->
      <nav class="nav-box">
        <router-link to="/index"
                     :class="{'nav-switch-sty': $route.path==='/index'}">首页</router-link>
        <router-link to="/service"
                     :class="{'nav-switch-sty': $route.path==='/service'}">服务</router-link>
        <router-link to="/case"
                     :class="{'nav-switch-sty': $route.path==='/case'}">案例</router-link>
        <router-link to="/news"
                     :class="{'nav-switch-sty': $route.path==='/news'}">新闻</router-link>
        <router-link to="/contact"
                     :class="{'nav-switch-sty': $route.path==='/contact'}">联系</router-link>
      </nav>
      <!-- 移动端导航入口 -->
      <i class="iconfont icon-gengduo more-icon"
         @click="open_mobile_menu"></i>
    </div>
    <!-- 移动端导航抽屉 -->
    <el-drawer :visible.sync="drawer"
               class="drawer-box"
               :close-on-press-escape="false"
               :modal="false"
               :show-close="false">
      <div slot="title">
        <i class="iconfont icon-guanbi"
           @click="drawer_close"></i>
        <img :src="whiteLogo">
      </div>
      <nav class="drawer-nav-box">
        <span class="a"
              @click="go_to_route('/index')">首页</span>
        <span class="a"
              @click="go_to_route('/service')">服务</span>
        <span class="a"
              @click="go_to_route('/case')">案例</span>
        <span class="a"
              @click="go_to_route('/news')">新闻</span>
        <span class="a"
              @click="go_to_route('/contact')">联系</span>
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
      drawer: false,
      navbg: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.windowScroll)
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
    },
    windowScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.navbg = scrollTop >= 500
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
  }
}
</script>

<style lang='less' scoped>
.nav-bar-box {
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  .nav-box {
    display: inline-flex;
    align-items: center;
    a {
      display: inline-block;
      text-align: center;
      color: #fff;
    }
  }
}

@media screen and (min-width: 1000px) {
  .nav-bar-box {
    padding: 0 120px;
    height: 65px;
    .img {
      height: 40px;
    }
    .case-detail-img {
      height: 40px; // PC端展示详情logo图标
    }
    .detail-back {
      display: none;
    }
    .more-icon {
      display: none; // PC端隐藏Menu图标
    }
    .nav-box {
      a {
        width: 75px;
        height: 65px;
        line-height: 65px;
      }
      .nav-switch-sty {
        background-color: #af001e;
        color: #fff;
      }
    }
  }
  .not-index-page {
    background-color: #fff;
    .nav-box {
      a {
        color: #333333;
      }
    }
  }
  .navbg {
    background: #333;
  }
}
@media screen and (max-width: 1000px) {
  .drawer-box {
    /deep/ .el-drawer__container {
      div {
        width: 100% !important;
        background-color: #000;
        header {
          margin-bottom: 0;
          padding: 0;
          div {
            height: 45px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #b3b3b3;
            img {
              height: 24px;
              margin-left: 118px;
            }
          }
        }
        section {
          .drawer-nav-box {
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
              color: #b3b3b3;
              border-bottom: 1px solid #b3b3b3;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .nav-bar-box {
    padding: 0 15px;
    height: 45px;
    .img {
      width: 80px;
      height: 24px;
    }
    .case-detail-img {
      display: none; // 移动端隐藏详情logo图标
    }
    .detail-back {
      display: flex;
      align-items: center;
      .icon-fanhui {
        font-size: 14px;
        font-weight: bold;
        margin-right: 10px;
      }
      .case-detail-title {
        font-size: 14px;
        color: #333333;
      }
    }
    .nav-box {
      display: none; // 移动端隐藏Pc端的导航
    }
    .more-icon {
      display: block;
      color: @red;
    }
  }
}
</style>
