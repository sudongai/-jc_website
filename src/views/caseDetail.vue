<template>
  <div class="case-detail margin-top60">
    5545555
    <div class="pageHeader-pc">
      <div class="navKey">
        <span @click="returnFn">&lt; 返回</span>
        <span @click="prevCase">上一个案例</span>
        <span @click="nextCase">下一个案例</span>
      </div>
    </div>
    <div class="pageHeader-mobile">
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'caseDetail',
  data () {
    return {}
  },
  computed : {
    ...mapState(['casePosition', 'caseLen'])
  },
  methods: {
    returnFn () {
      this.$router.push('/case')
    },
    prevCase () {
      if (casePosition < 0) return
    },
    nextCase () {
      if (casePosition > caseLen) return
    },
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
</script>

<style lang="less" scoped>
@media only screen and (min-width: 1000px) {
  .pageHeader-mobile {
    display: none;
  }
  .pageHeader-pc {
    display: block;
    width: 100%;
    padding: 0 5% !important;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1000px) {
  .pageHeader-mobile {
    display: block;
  }
  .pageHeader-pc {
    display: none;
  }
}
</style>
