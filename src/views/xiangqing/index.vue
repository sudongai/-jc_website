<template>
  <div class="case-detail">
    <div class="main-page">
      <div class="nav-key">
        <el-button type="text" @click="returnFn">&lt; 返回</el-button>
        <el-button type="text" :disabled='prevCase' @click="handlePrevCase">上一个案例</el-button>
        <el-button type="text" :disabled='nextCase' @click="handlenNextCase">下一个案例</el-button>
      </div>
      <div v-if="Object.keys(pageInfo).length > 0" class="content-page">
        <div class="det-title">{{pageInfo.caseInfo.description}}</div>
        <!-- <div class="det-tags">{{pageInfo.caseInfo.tag}}</div> -->
        <span class="det-tag" v-for="(item, index) in pageInfo.caseInfo.tag" :key="index"># {{item}}</span>
        <hr class="det-hr">
        <!-- <div class="det-description">{{pageInfo.caseInfo.description}}</div> -->
        <div class="det-content" v-html="pageInfo.caseInfo.content"></div>
      </div>
      <div class="nav-bottom-key">
        <el-button type="text" :disabled='prevCase' @click="handlePrevCase">上一个案例</el-button>
        <el-button type="text" :disabled='nextCase' @click="handlenNextCase">下一个案例</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import api from '@api'
export default {
  name: 'caseDetail',
  data () {
    return {
      pageInfo: {},
      caseId: ''
    }
  },
  computed : {
    ...mapState(['casePosition', 'caseList']),
    prevCase () {
     return this.casePosition <= 0 
    },
    nextCase () {
      return this.casePosition >= this.caseList.length - 1 
    }
  },
  methods: {
    ...mapMutations(['setCasePosition']),
    returnFn () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    handlePrevCase () {
      this.setCasePosition(this.casePosition-1)
      console.log('上一个案例', '当前索引', this.casePosition)
      const caseId = this.caseList[this.casePosition].caseId
      this.getCaseDetail(caseId)
    },
    handlenNextCase () {
      this.setCasePosition(this.casePosition+1)
      console.log('下一个案例', '当前索引', this.casePosition)
      const caseId = this.caseList[this.casePosition].caseId
      this.getCaseDetail(caseId)
    },
    async getCaseDetail (caseId) {
      const res = await api.getCaseDetail({caseId: caseId}).catch(() => { })
      const {caseInfo, imgList} = res
      this.$set(this.pageInfo, 'caseInfo', caseInfo)
      this.$set(this.pageInfo, 'imgList', imgList)
    }
  },
  created () {
    this.getCaseDetail(this.$route.query.caseId)
    console.log('路由参数', this.$route.query.caseId)
  }
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
      color: #AF001E;
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
        & + .det-tag{
          margin-left: 10px;
        }
      }
      // .det-description {
      //   font-size: 12px;
      // }
    }
    .nav-bottom-key{
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
        & + .det-tag{
          margin-left: 20px;
        }
      }
      // .det-description {
      //   font-size: 12px;
      // }
    }
    .nav-bottom-key{
      display: block;
      font-size: 12px;
      padding: 0 40px;
      .flex-box(center);
    }
  }
}
</style>
