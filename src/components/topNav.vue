<!--  -->
<template>
  <div>
    <el-header>
      <img :src="logoPath"
           alt=""
           srcset="">
      <nav class="nav"
           v-if="!isMobile">
        <router-link to="./index"
                     :class="color000?'font-color000':'font-colorfff'">首页</router-link>
        <router-link to="./service"
                     :class="color000?'font-color000':'font-colorfff'">服务</router-link>
        <router-link to="./case"
                     :class="color000?'font-color000':'font-colorfff'">案例</router-link>
        <router-link to="./news"
                     :class="color000?'font-color000':'font-colorfff'">新闻</router-link>
        <router-link to="./cantact"
                     :class="color000?'font-color000':'font-colorfff'">联系</router-link>
      </nav>
      <i v-else
         class="iconfont icon-gengduo"
         :class="color000?'font-colorred':'font-colorfff'"
         @click="handleShowNav(true)"></i>
    </el-header>
    <mNav v-if="isShowNav"
          @handleCloseNav='handleShowNav'></mNav>
  </div>
</template>

<script>
import logoWhite from '@common/imgs/Logo_fb.png'
import logoBlack from '@common/imgs/Logo.png'
import mNav from '@components/mobileNav.vue'
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {
      logoPath: logoWhite,
      color000: false,
      isShowNav: false
    }
  },
  components: {
    mNav
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.setNavColor()
      },
      deep: true
    }
  },
  computed: {
    ...mapState('module1', [
      'screenWidth',
      'screenHeight'
    ]),
    isMobile () {
      return this.screenWidth < 1000
    }
  },
  methods: {
    setNavColor () {
      this.logoPath = this.$route.fullPath === '/index' ? logoWhite : logoBlack
      this.color000 = this.$route.fullPath !== '/index'
    },
    handleShowNav (state) {
      this.isShowNav = state
    }
  },
  created () {
    this.setNavColor()
  }
}
</script>
<style lang='less' scoped>
.el-header {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% !important;
  box-sizing: border-box;
  .color000 {
    color: #000;
  }
  .font-colorfff {
    color: #fff;
  }
  .font-colorred {
    color: #af001e;
  }
  .router-link-active {
    background: #af001e;
    color: #ffffff;
  }
}
@media only screen and (min-width: 1000px) {
  .el-header {
    height: 60px !important;
    img {
      height: 40px;
    }
    a {
      font-size: 14px;
      color: #333333;
      display: inline-block;
      line-height: 60px;
      height: 60px;
      padding: 0 20px;
      &:hover {
        color: @blue;
        // background: #af001e;
      }
    }
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  }
}
@media only screen and (max-width: 1000px) {
  .el-header {
    height: 44px !important;
    img {
      height: 20px;
    }
  }
}
</style>
