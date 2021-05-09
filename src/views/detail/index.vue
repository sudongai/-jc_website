<template>
  <div class="case-detail">
    <div class="main-page">
      <!-- PC端的操作按钮 -->
      <div class="nav-key">
        <el-button type="text" @click="returnFn">&lt; 返回</el-button>
        <el-button
          type="text"
          :disabled="prevCaseStat"
          @click="prevCase"
          v-if="$route.path === '/case_detail'"
          >上一个案例</el-button
        >
        <el-button
          type="text"
          :disabled="nextCaseStat"
          @click="nextCase"
          v-if="$route.path === '/case_detail'"
          >下一个案例</el-button
        >
        <el-button
          type="text"
          :disabled="prevNewsStat"
          @click="prevNews"
          v-if="$route.path === '/news_detail'"
          >上一条新闻</el-button
        >
        <el-button
          type="text"
          :disabled="nextNewsStat"
          @click="nextNews"
          v-if="$route.path === '/news_detail'"
          >下一条新闻</el-button
        >
      </div>
      <div class="content-container">
        <div v-if="$route.path === '/case_detail' && Object.keys(caseInfo).length > 0" class="case-detail-content">
          <div class="det-des"></div><!-- caseInfo.description 字符串 -->
          <div class="det-tag"></div><!-- caseInfo.tag 字符串 -->
          <hr class="det-hr" /><!-- hr 分隔线 -->
          <div class="det-con"></div><!-- caseInfo.content 模板字符串 -->
        </div>
        <div v-if="$route.path === '/news_detail' && Object.keys(newsInfo).length > 0" class="news-detail-content">
          <div class="det-title"></div><!-- newsInfo.title 标题 -->
          <div class="det-create-time"></div><!-- newsInfo.createTime 创建时间 -->
          <hr class="det-hr" /><!-- hr 分隔线 -->
          <div class="det-subtitle"></div><!-- newsInfo.subtitle 副标题 -->
          <div class="det-content"></div><!-- newsInfo.content 内容 -->
        </div>
      </div>
      <!-- 移动端的操作按钮 -->
      <div class="nav-bottom-key">
        <el-button
          type="text"
          :disabled="prevCaseStat"
          @click="prevCase"
          v-if="$route.path === '/case_detail'"
          >上一个案例</el-button
        >
        <el-button
          type="text"
          :disabled="nextCaseStat"
          @click="nextCase"
          v-if="$route.path === '/case_detail'"
          >下一个案例</el-button
        >
        <el-button
          type="text"
          :disabled="prevNewsStat"
          @click="prevNews"
          v-if="$route.path === '/news_detail'"
          >上一条新闻</el-button
        >
        <el-button
          type="text"
          :disabled="nextNewsStat"
          @click="nextNews"
          v-if="$route.path === '/news_detail'"
          >下一条新闻</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import api from '@api'
export default {
  name: 'caseDetail',
  data() {
    return {
      caseInfo: {},
      newsInfo: {}
    }
  },
  computed: {
    ...mapState(['casePosition', 'newsPosition', 'caseList', 'newsList']),
    /**
     * prevCaseStat 是否禁用'上一个案例'按钮
     * nextCaseStat 是否禁用'下一个案例'按钮
     * prevNewsStat 是否禁用'上一个新闻'按钮
     * nextNewsStat 是否禁用'下一个新闻'按钮
     */
    prevCaseStat() {
      return this.casePosition <= 0
    },
    nextCaseStat() {
      return this.casePosition >= this.caseList.length - 1
    },
    prevNewsStat() {
      return this.newsPosition <= 0
    },
    nextNewsStat() {
      return this.newsPosition >= this.newsList.length - 1
    },
  },
  methods: {
    ...mapMutations(['setCasePosition', 'setNewsPosition']),
    // PC 端'返回'按钮
    returnFn() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    // 上一个案例
    prevCase() {
      this.setCasePosition(this.casePosition - 1)
      const caseId = this.caseList[this.casePosition].caseId
      this.getCaseDetail(caseId)
    },
    // 下一个案例
    nextCase() {
      this.setCasePosition(this.casePosition + 1)
      const caseId = this.caseList[this.casePosition].caseId
      this.getCaseDetail(caseId)
    },
    // 上一条新闻
    prevNews() {
      this.setNewsPosition(this.newsPosition - 1)
      const newsId = this.newsList[this.newsPosition].newsId
      this.getNewsDetail(newsId)
    },
    // 下一条新闻
    nextNews() {
      this.setNewsPosition(this.newsPosition + 1)
      const newsId = this.newsList[this.newsPosition].newsId
      this.getNewsDetail(newsId)
    },
    // 通过caseId获取案例详情
    async getCaseDetail(params) {
      const res = await api.getCaseDetail(params).catch(() => {})
      const { caseInfo } = res
      this.caseInfo = caseInfo
    },
    // 通过newsId获取新闻详情
    async getNewsDetail(newsId) {
      const res = await api.getNewsDetail({ newsId }).catch(() => {})
      this.newsInfo = res
    },
  },
  created() {
    // 根据当前路由来区分'案例详情' || '新闻详情'，并请求对应的详情数据
    if (this.$route.path === '/case_detail') {
      let params = {
        caseId: this.$route.query.caseId,
      }
      this.getCaseDetail(Object.assign(params, this.$util.getSign(params)))
    }
    if (this.$route.path === '/news_detail') {
      let params = {
        newsId: this.$route.query.newsId,
      }
      this.getNewsDetail(Object.assign(params, this.$util.getSign(params)))
    }
  },
}
</script>

<style lang="less" scoped>
.main-page {
  display: block;
  width: 100%;
  padding: 0 5% !important;
  box-sizing: border-box;
  margin: 0 auto;
  .content-page {
    .det-title {
      color: #333;
      font-weight: bold;
    }
    .det-hr {
      padding-bottom: 20px;
    }
    .det-tag {
      color: #af001e;
      display: inline-block;
    }
    // .det-description {
    //   color: #333;
    // }
    .det-content {
      /deep/ img {
        width: 100%;
      }
    }
  }
}
@media only screen and (min-width: 1000px) {
  .main-page {
    .nav-key {
      display: block;
      padding: 28px 0 8px;
    }
    .content-page {
      .det-title {
        font-size: 20px;
      }
      .det-hr {
        padding-bottom: 10px;
      }
      .det-tag {
        font-size: 14px;
        padding: 15px 0 25px;
        & + .det-tag {
          margin-left: 10px;
        }
      }
      // .det-description {
      //   font-size: 12px;
      // }
    }
    .nav-bottom-key {
      display: none;
    }
  }
}
@media screen and (max-width: 1000px) {
  .main-page {
    .nav-key {
      display: none;
    }
    .content-page {
      .det-title {
        padding-top: 20px;
        font-size: 16px;
      }
      .det-tag {
        font-size: 12px;
        padding: 10px 0;
        & + .det-tag {
          margin-left: 20px;
        }
      }
      // .det-description {
      //   font-size: 12px;
      // }
    }
    .nav-bottom-key {
      display: block;
      font-size: 12px;
      padding: 0 40px;
      .flex-box(center);
    }
  }
}
</style>
