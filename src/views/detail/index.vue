<template>
  <div class="case-detail">
    <div class="main-page">
      <!-- PC端的操作按钮 -->
      <div class="nav-key">
        <el-button type="text"
                   @click="returnFn">&lt; 返回</el-button>
        <el-button type="text"
                   :disabled="prevCaseStat"
                   @click="prevCase"
                   v-if="$route.path === '/case_detail'">上一个案例</el-button>
        <el-button type="text"
                   :disabled="nextCaseStat"
                   @click="nextCase"
                   v-if="$route.path === '/case_detail'">下一个案例</el-button>
        <el-button type="text"
                   :disabled="prevNewsStat"
                   @click="prevNews"
                   v-if="$route.path === '/news_detail'">上一条新闻</el-button>
        <el-button type="text"
                   :disabled="nextNewsStat"
                   @click="nextNews"
                   v-if="$route.path === '/news_detail'">下一条新闻</el-button>
      </div>
      <div v-if="$route.path === '/case_detail' && Object.keys(caseInfo).length > 0"
           class="case-detail-content">
        <div class="det-title">{{caseInfo.description || '这是title'}}</div>
        <div class="det-tag"># {{caseInfo.tag || '这是tag'}}</div>
        <hr class="det-hr" /><!-- hr 分隔线 -->
        <div class="det-con"
             v-html="caseInfo.content ||'内容html'"></div>
      </div>
      <div v-if="$route.path === '/news_detail' && Object.keys(newsInfo).length > 0"
           class="news-detail-content">
        <div class="det-title">{{newsInfo.title || '这是title'}}</div>
        <div class="det-create-time">发布时间：{{newsInfo.createTime || 'XXXX-XX-XX'}}</div>
        <hr class="det-hr" /><!-- hr 分隔线 -->
        <!-- <div class="det-subtitle"></div>newsInfo.subtitle 副标题 -->
        <div class="det-content"
             v-html="newsInfo.content || 'content-html'"></div>
      </div>
      <!-- 移动端的操作按钮 -->
      <div class="
             nav-bottom-key">
        <el-button type="text"
                   :disabled="prevCaseStat"
                   @click="prevCase"
                   v-if="$route.path === '/case_detail'">上一个案例</el-button>
        <el-button type="text"
                   :disabled="nextCaseStat"
                   @click="nextCase"
                   v-if="$route.path === '/case_detail'">下一个案例</el-button>
        <el-button type="text"
                   :disabled="prevNewsStat"
                   @click="prevNews"
                   v-if="$route.path === '/news_detail'">上一条新闻</el-button>
        <el-button type="text"
                   :disabled="nextNewsStat"
                   @click="nextNews"
                   v-if="$route.path === '/news_detail'">下一条新闻</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import api from '@api'
export default {
  name: 'caseDetail',
  data () {
    return {
      caseInfo: {},
      newsInfo: {}
    }
  },
  computed: {
    ...mapState(['caseIndex', 'newsIndex', 'caseList', 'newsList']),
    /**
     * prevCaseStat 是否禁用'上一个案例'按钮
     * nextCaseStat 是否禁用'下一个案例'按钮
     * prevNewsStat 是否禁用'上一个新闻'按钮
     * nextNewsStat 是否禁用'下一个新闻'按钮
     */
    prevCaseStat () {
      return this.caseIndex <= 0
    },
    nextCaseStat () {
      return this.caseIndex >= this.caseList.length - 1
    },
    prevNewsStat () {
      return this.newsIndex <= 0
    },
    nextNewsStat () {
      return this.newsIndex >= this.newsList.length - 1
    }
  },
  methods: {
    // 下标
    ...mapMutations(['setCaseIndex', 'setNewsIndex']),
    // PC 端'返回'按钮
    returnFn () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    // 上一个案例
    prevCase () {
      this.setCaseIndex(this.caseIndex - 1)
      const caseId = this.caseList[this.caseIndex].caseId
      this.getCaseDetail({ caseId })
    },
    // 下一个案例
    nextCase () {
      this.setCaseIndex(this.caseIndex + 1)
      const caseId = this.caseList[this.caseIndex].caseId
      this.getCaseDetail({ caseId })
    },
    // 上一条新闻
    prevNews () {
      this.setNewsIndex(this.newsIndex - 1)
      const newsId = this.newsList[this.newsIndex].newsId
      this.getNewsDetail({ newsId })
    },
    // 下一条新闻
    nextNews () {
      this.setNewsIndex(this.newsIndex + 1)
      const newsId = this.newsList[this.newsIndex].newsId
      this.getNewsDetail({ newsId })
    },
    // 通过caseId获取案例详情
    async getCaseDetail (params) {
      const res = await api.getCaseDetail(params).catch(() => { })
      const { caseInfo } = res
      this.caseInfo = caseInfo
    },
    // 通过newsId获取新闻详情
    async getNewsDetail (params) {
      const res = await api.getNewsDetail(params).catch(() => { })
      this.newsInfo = res
    },
  },
  created () {
    // 根据当前路由来区分'案例详情' || '新闻详情'，并请求对应的详情数据
    if (this.$route.path === '/case_detail') {
      let params = {
        caseId: this.$route.query.caseId,
      }
      this.getCaseDetail(params)
    }
    if (this.$route.path === '/news_detail') {
      let params = {
        newsId: this.$route.query.newsId,
      }
      this.getNewsDetail(params)
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
  .det-create-time {
    color: #999999;
    font-size: 12px;
  }
  .det-content {
    /deep/ img {
      width: 100%;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .main-page {
    .nav-key {
      display: block;
      padding: 28px 0 8px;
    }
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
    .det-create-time {
      margin: 10px 0 20px;
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
    .det-create-time {
      margin: 10px 0;
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
