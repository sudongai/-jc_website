<!--  -->
<template>
  <div>
    <el-header :class="color000?'bg-color000':'bg-colorfff'">
      <img :src="logoPath"
           alt=""
           srcset=""
           v-if="!pageTitle && !routerNameIsDetail">
      <span @click="goToPage"
            v-if="pageTitle && screenWidth <= 1000"> {{pageTitle}} </span>
      <nav class="nav pc-nav">
        <router-link to="/index"
                     :class="color000?'font-color000':'font-colorfff'">首页</router-link>
        <router-link to="/service"
                     :class="color000?'font-color000':'font-colorfff'">服务</router-link>
        <router-link to="/case"
                     :class="color000?'font-color000':'font-colorfff'">案例</router-link>
        <router-link to="/news"
                     :class="color000?'font-color000':'font-colorfff'">新闻</router-link>
        <router-link to="/cantact"
                     :class="color000?'font-color000':'font-colorfff'">联系</router-link>
      </nav>
      <i class="m-nav iconfont icon-gengduo "
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
      isShowNav: false,
      routerNameIsDetail: ''
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
    ...mapState(['pageTitle', 'screenWidth']),
  },
  methods: {
    setNavColor () {
      this.logoPath = this.$route.fullPath === '/index' ? logoWhite : logoBlack
      this.color000 = this.$route.fullPath !== '/index'
    },
    handleShowNav (state) {
      this.isShowNav = state
    },
    goToPage () {
      // this.$emit('goToPage')
      this.$store.commit('setPageTitle', '')
      this.$router.go(-1)
      // window.location.reload()
    }
  },
  created () {
    this.routerNameIsDetail = this.$route.name === 'detail'
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
.bg-color000 {
  background: #fff;
}
.bg-colorfff {
  // background: #000;
}
@media only screen and (min-width: 1000px) {
  .el-header {
    height: 60px !important;
    img {
      height: 40px;
    }
    .pc-nav {
      display: block;
    }
    .m-nav {
      display: none;
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
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
    img {
      height: 20px;
    }
    .pc-nav {
      display: none;
    }
    .m-nav {
      display: block;
    }
  }
}
</style>
