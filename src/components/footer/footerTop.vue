<!-- 底部的上半部分 -->
<template>
  <div class="footer-top">
    <div class="title-box">
      <p class="h1-title">联系</p>
      <p class="h2-title">contact</p>
    </div>
    <div class="phone">
      <p>13910675619</p>
      <img src="../../assets/imgs/qrcode.jpg"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'footertop',
  data () {
    return {}
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  created () { }
}
</script>
<style lang='less' scoped>
.phone {
  font-weight: bold;
  p {
    color: #333333;
  }
}
@media only screen and (min-width: 1000px) {
  .phone {
    padding: 0 120px;
    margin-top: -45px;
    .flex-box(space-between);
    align-items: flex-end;
    p {
      font-size: 44px;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .phone {
    padding: 0 15px;
    p {
      font-size: 22px;
    }
    img {
      display: none;
    }
  }
}
</style>
