<!-- 服务 -->
<template>
  <div class="margin-top60">
    服务页面
  </div>
</template>

<script>
import api from '@api'
import {mapState} from 'vuex'
export default {
  name: 'service',
  data () {
    return {
      
    }
  },
  props: [],
  components: {},
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
  },
  created () {
  }
}
</script>
<style lang='less' scoped>
</style>
