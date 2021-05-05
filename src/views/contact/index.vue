<template>
  <div>
    <div class="banner">
      <img class="logo-img"
           src="../../assets/imgs/Logo_fb.png"
           alt="">
      <p>简创公关隶属于北京简创商务服务有限公司，是全国领先的专业营销整合机构，通过公司的不断发展壮大，现已形成了覆盖全国从策划、创意到制作、执行、场地、搭建、线上会议，提供完善的一站式服务。作为中国市场新形势下的营销机构，通过不断的一线实战经验，建立起了巩固的资源网络，独特的创新设计，专业的执行技能，完美的服务理念，简易化的推广流程，从而使客户高时效、高质量，最大程度降低成本，使其更省心、更舒心、更放心的品牌推广营销公司。</p>
      <p>北京简创公关公司对文化的打造和传播，始终关注于个人创意、团体活动及大型全国赛事等多元性文化，始终支持于新兴的文化理念、以宏声的观角、创新精神，始终致力于塑造良好的社会文化氛围、孵化有生命力的原创文化、推进积极向上的文化力量。我们对这些文化进行整合并使之能补充、丰富并构成多彩生姿的社会文化。</p>
      <p>北京简创公关公司通过自身的发展壮大，形成了立足于北京、上海、广州、深圳、成都等城市，辐射全国的营销格局，并专注于服务高品质、高水准的客户群体，以规范的管理、精湛的技能、超强的团队协作能力、极尽于完美的服务理念，深得广大客户的青睐。</p>
    </div>
    <footertop />
  </div>
</template>

<script>
import footertop from '@components/footer/footerTop.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  components: {
    footertop
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () {
  }
}
</script>

<style lang='less' scoped>
.banner {
  .bis("../../assets/imgs/banner-contact.jpeg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    color: #ffffff;
    text-indent: 2em;
  }
}
@media only screen and (min-width: 1000px) {
  .banner {
    .wh(100%,682px);
    .logo-img {
      height: 60px;
      margin: 140px 0 40px;
    }
    p {
      .ft-sizeLineheight(14px,20px);
      color: #ffffff;
      // text-indent: 28px;
      padding: 0 15%;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .banner {
    .wh(100%,500px);
    .logo-img {
      height: 40px;
      margin: 50px 0 20px;
    }
    p {
      .ft-sizeLineheight(12px,18px);
      // text-indent: 24px;
      padding: 0 10%;
    }
  }
}
</style>
