<!--  -->
<template>
  <div>
    <el-header>
      <img :src="logoPath"
           alt=""
           srcset="">
      <nav class="nav">
        <router-link to="./index">首页</router-link>
        <router-link to="./service">服务</router-link>
        <router-link to="./case">案例</router-link>
        <router-link to="./news">新闻</router-link>
        <router-link to="./cantact">联系</router-link>
      </nav>
    </el-header>
  </div>
</template>

<script>
import logoWhite from '@common/imgs/Logo_fb.png'
import logoBlack from '@common/imgs/Logo.png'
export default {
  name: '',
  data () {
    return {
      logoPath: logoWhite
    }
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  created () {
    this.logoPath = this.$route.fullPath === '/index' ? logoWhite : logoBlack

  }
}
</script>
<style lang='less' scoped>
.el-header {
  width : 100%;
  position : fixed;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0 120px !important;
  box-sizing : border-box;
  img {
    height : 40px;
  }
  a {
    font-size : 14px;
    color : #333333;
    display : inline-block;
    line-height : 60px;
    height : 60px;
    padding : 0 20px;
    &:hover {
      color : #FFFFFF;
      background : #AF001E;
    }
  }
  .router-link-active {
    background : #AF001E;
    color : #FFFFFF;
  }
  box-shadow : 0 0 4px 0 rgba(0, 0, 0, .25);
}

</style>
