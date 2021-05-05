<template>
  <div class="news-box">
    <div class="title-box">
      <p class="h1-title">新闻</p>
      <p class="h2-title">news</p>
    </div>
    <div class="news-list-box">
      <div v-for="item in newsList" :key="item.newsId" class="cur-news-box">
        <img :src="item.cover" class="img">
        <span class="title">{{item.title}}</span>
        <div class="cen-line"></div>
        <span class="subtitle">{{item.subtitle}}</span>
        <div class="createTime">
          <span>{{time(item.createTime)[0]}}</span>
          <br>
          <span>{{time(item.createTime)[1]}}</span>
          </div>
      </div>
      <i v-for="item in newsList" :key="item.newsId"></i>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import api from '@api'
export default {
  data () {
    return {
      newsList: []
    }
  },
  computed: {
    time () {
      return (val) => {
        let arr = val.split('-')
        return [arr[0], '-'+arr[1]]
      }
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations(['setNewsList'])
  },
  components: {
  },
  async created () {
    const res = await api.getNewsList().catch(err => { })
    this.newsList = res.list
    this.setNewsList(res) // 往仓库填案例列表数据
  }
}
</script>

<style lang='less' scoped>
.news-list-box {
  display: flex;
  flex-wrap: wrap;
  padding: 0 120px;
  justify-content: space-between;
  box-sizing: border-box;
  i {
    width: 387px;
    margin-right: 20px;
  }
  .cur-news-box {
    width: 387px;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    margin-right: 20px;
    flex: 0 1 auto;
    .img {
      width: 387px;
      height: 220px;
      margin-bottom: 20px;
    }
    .title {
      display: inline-block;
      padding: 0 20px;
      box-sizing: border-box;
      color: #333333;
      font-size: 16px;
    }
    .cen-line {
      box-sizing: border-box;
      width: 24px;
      height: 4px;
      background-color: #333333;
      margin: 10px 20px 14px;
    }
    .subtitle {
      display: inline-block;
      padding: 0 20px;
      box-sizing: border-box;
      color: #666666;
      font-size: 12px;
    }
    .createTime {
      padding: 9px 10px 8px;
      position: absolute;
      top: 0;
      left: 20px;
      background-color: #f1f1f1;
      font-size: 24px;
      color: #333333;
      text-align: right;
      span:last-child {
        display: inline-block;
        margin-top: 11px;
      }
    }
  }
}
</style>
