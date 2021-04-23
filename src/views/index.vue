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
    <div class="flex">
      <div class="coulture-item">
        <i class="iconfont icon-chuangyilinggan"></i>
        <p>思维无界</p>
        <span>————</span>
        <p>从战略角度分析商业环境，从策略层面制定可衡量的市场传播计划。我们基于对市场、品牌、受众和消费者行为模式的充分了解，致力于为客户提供系统的方法和方案，从而创造卓越的商业价值。</p>
      </div>
      <div class="coulture-item">
        <i class="iconfont icon-jizhiwanmei"></i>
        <p>极致完美</p>
        <span>————</span>
        <p>认真、负责的做好每一个环节，每一个嘉亿人都是追求完美的艺术家。我们信奉完美，追求极致，全心全力为您打造精品。通过专业细致的执行力，使我们的方案，转化为行动，完美极致的实现在您的眼前。</p>
      </div>
      <div class="coulture-item">
        <i class="iconfont icon-gaoxiaozhuanye"></i>
        <p>高效专业</p>
        <span>————</span>
        <p>凭借多年的丰富经验，构建了以客户需求和行业要求为导向的专业服务体系及健全的服务网络。我们用热忱、认真、严谨的作风感染着每一个合作客户。为每一位客户提供优质高效的公关服务是我们永恒的承诺。
        </p>
      </div>
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
