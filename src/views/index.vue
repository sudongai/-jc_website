<!-- 入口页面 -->
<template>
  <div>
    <div class="banner">
      <p class="font-size3">全国领先的专业营销整合机构</p>
      <p class="font-size1">Chinese Leading professional marketing integration organization</p>
      <p class="font-size2">为您提供完备的解决方案</p>
    </div>
    <div class="title-box">
      <p class="h1-title">企业文化</p>
      <p class="h2-title">CORPORATE CULTURE</p>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'indexP',
  data () {
    return {
    }
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  created () {
  }
}
</script>
<style lang='less' scoped>
.banner {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.title-box {
  padding: 40px 120px 24px;
  font-weight: bold;
  .h1-title {
    font-size: 24px;
    color: #333333;
  }
  .h2-title {
    margin-top: 10px;
    font-size: 13px;
    color: #999999;
  }
}
@media only screen and (min-width: 1000px) {
  .banner {
    padding-top: 60px;
    height: 500px;
    background: url("../assets/imgs/Img_sy_banner_web.jpg") top left no-repeat;
    background-size: 100% 100%;

    .font-size3 {
      font-size: 32px;
    }
    .font-size1 {
      font-size: 14px;
      margin: 20px 0 20px;
    }
    .font-size12 {
      font-size: 18px;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .banner {
    padding-top: 44px;
    height: 320px;
    background: url("../assets/imgs/Img_sy_banner_wap.jpg") top left no-repeat;
    background-size: 100% 100%;

    .font-size3 {
      font-size: 18px;
    }
    .font-size1 {
      font-size: 12px;
      line-height: 16px;
      padding: 0 28px;
      text-align: center;
      margin: 10px 0 30px;
    }
    .font-size2 {
      font-size: 14px;
    }
  }
}
</style>
