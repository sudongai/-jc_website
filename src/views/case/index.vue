<!-- 案例 -->
<template>
  <div class="case-page">
    <div class="tab-box">
      <div class="title-box">
        <p class="h1-title">服务案例</p>
        <p class="h2-title">SERVICE CASE</p>
      </div>
      <el-tabs v-model="activeId"
               @tab-click="handleClick">
        <el-tab-pane v-for="item in categoryOptions"
                     :key="item.categoryId"
                     :label="item.cateName"
                     :name="item.categoryId"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="case-box">
      <div v-for="(item, index) in caseListOptions"
           :key="item.caseId"
           class="case-item"
           @click="handleToDetail(item.caseId, index)">
        <div class="case-img-box">
          <img :src="item.cover"
               alt="简创公关" />
        </div>
        <div class="case-title">| {{ item.title }}</div>
        <div class="case-company">{{ item.company }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@api'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'service',
  data () {
    return {
      activeId: '1',
      categoryOptions: [],
      caseListOptions: [],
    }
  },
  props: [],
  components: {},
  computed: {
    ...mapState(['caseList']),
  },
  watch: {},
  methods: {
    ...mapMutations(['setCaseList', 'setCaseIndex']),
    async getCategory () {
      const res = await api
        .getCategory()
        .catch((err) => Promise.reject(err))
      this.categoryOptions = res
    },
    async getCaseList () {
      let params = {
        page: '1',
        pageSize: '20',
        categoryId: this.activeId,
      }
      const res = await api
        .getCaseList(params)
        .catch((err) => Promise.reject(err))
      this.caseListOptions = res.list
      this.setCaseList(res.list) // 往仓库填案例列表数据
    },
    handleClick () {
      this.getCaseList()
    },
    handleToDetail (id, index) {
      this.setCaseIndex(index)
      this.$router.push({
        path: '/case_detail',
        query: {
          caseId: id
        },
      })
    },
  },
  created () {
    this.getCategory()
    this.getCaseList()
  },
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
      &:hover .case-title {
        color: @red;
      }
      padding: 0 20px 0 0;
      .case-img-box {
        img {
          .wh(272px,181px);
        }
        position: relative;
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #000;
          opacity: 0.3;
          .wh(272px,181px);
        }
        &:hover:after {
          opacity: 0;
        }
      }
      .case-title {
        width: 272px;
        word-wrap: break-word;
        font-size: 16px;
        line-height: 22px;
        color: #333333;
        font-weight: bold;
        margin: 10px 0;
      }
      .case-company {
        width: 272px;
        word-wrap: break-word;
        font-size: 12px;
        line-height: 16px;
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
      &:hover .case-title {
        color: @red;
      }
      width: 50%;
      box-sizing: border-box;
      padding: 20px 15px 0;
      .case-img-box {
        text-align: center;
        img {
          .wh(165px,110px);
        }
        position: relative;
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -82.5px;
          background: #000;
          opacity: 0.3;
          .wh(165px,110px);
        }
        &:hover:after {
          opacity: 0;
        }
      }
      .case-title {
        width: 165px;
        font-size: 12px;
        color: #333333;
        font-weight: bold;
        margin: 10px auto;
      }
      .case-company {
        width: 165px;
        margin: 0 auto 20px;
        font-size: 12px;
        color: #666666;
      }
    }
  }
}
</style>
