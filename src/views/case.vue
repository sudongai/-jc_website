<!-- 案例 -->
<template>
  <div class="margin-top60">
    <div class="tab-box">
      <div class="title-box">
        <p class="h1-title">服务案例</p>
        <p class="h2-title">SERVICE CASE</p>
      </div>
      <el-tabs v-model="activeId" @tab-click="handleClick">
        <el-tab-pane v-for="item in categoryOptions" :key="item.categoryId" :label="item.cateName" :name="item.categoryId"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="case-box">
      <div v-for="item in caseListOptions" :key="item.caseId" class="case-item">
        <div class="case-img-box">
          <img :src="item.cover" alt="简创公关">
         </div>
        <p class="case-title">{{item.title}}</p>
        <p class="case-company">{{item.company}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@api'
import {mapState} from 'vuex'
export default {
  name: 'service',
  data () {
    return {
      activeId: '0',
      categoryOptions: [],
      caseListOptions: []
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
  watch: {
  },
  methods: {
    async getCategory () {
      const res = await api.category().catch(err => Promise.reject(err))
      const values = Object.values(res)
      this.categoryOptions = values
    },
    async getCaseList () {
      const res = await api.caseList({categoryId: this.activeId}).catch(err => Promise.reject(err))
      const values = Object.values(res.list)
      this.caseListOptions = values
    },
    async getCaseDetail () {
      const res = await api.caseDetail()
      console.log(res)
    },
    handleClick() {
      this.getCaseList()
    }
  },
  created () {
    this.getCategory()
    this.getCaseList()
    this.getCaseDetail()
  }
}
</script>
<style lang='less' scoped>
@media only screen and (min-width: 1000px) {
  .tab-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-tabs {
      padding-right: 120px;
      /deep/ .el-tabs__nav-wrap::after {
        height: 0;
      }
    }
  }
  .case-box {
    .flex-box(flex-start);
    flex-wrap: wrap;
    .case-item {
      padding:0 20px 0 0;
      .case-img-box {
        img {
          .wh(272px,181px);
        }
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background:#000;
          opacity: 0.3;
          .wh(272px,181px)
        }
        &:hover:after {
          opacity: 0;
        }
      }
      .case-title {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        margin: 10px 0;
      }
      .case-company {
        font-size: 12px;
        color: #666666;
        margin-bottom: 20px;
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .tab-box {
    display: flex;
    flex-direction: column;
    .el-tabs {
      /deep/ .el-tabs__nav-wrap::after {
        height: 0;
      }
    }
  }
  .case-box {
    .flex-box();
    flex-wrap: wrap;
    .case-item {
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      padding: 20px 15px 0;
      .case-img-box {
        img {
          .wh(165px,110px);
        }
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -82.5px;
          background:#000;
          opacity: 0.3;
          .wh(165px,110px)
        }
        &:hover:after {
          opacity: 0;
        }
      }
      .case-title {
        font-size: 12px;
        color: #333333;
        font-weight: bold;
        margin: 10px 0;
      }
      .case-company {
        font-size: 12px;
        color: #666666;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
