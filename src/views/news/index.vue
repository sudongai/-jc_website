<template>
  <div class="news-box">
    <div class="title-box">
      <p class="h1-title">新闻</p>
      <p class="h2-title">news</p>
    </div>
    <div class="news-list-box">
      <div v-for="item in newsList"
           :key="item.newsId"
           class="cur-news-box">
        <img :src="item.cover"
             class="img"
             @click="toDetail(item)">
        <span class="title">{{item.title}}</span>
        <div class="cen-line"></div>
        <span class="subtitle">{{item.subtitle}}</span>
        <div class="createTime">
          <span>{{time(item.createTime)[0]}}</span>
          <br>
          <span>{{time(item.createTime)[1]}}</span>
        </div>
      </div>
      <i></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
        return [arr[0], '-' + arr[1]]
      }
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations(['setNewsList']),
    toDetail (item) {
      this.$router.push({
        path: '/news_detail',
        query: {
          id: item.id
        }
      })
    }
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
@media screen and (min-width: 1000px) {
  .news-list-box {
    padding: 0 120px;
    justify-content: space-between;
    i {
      width: 387px;
      margin-right: 20px;
    }
    .cur-news-box {
      width: 387px;
      margin-right: 20px;
      .img {
        width: 387px;
        height: 220px;
        margin-bottom: 20px;
      }
      .title {
        font-size: 16px;
        padding: 0 20px;
      }
      .cen-line {
        width: 24px;
        height: 4px;
        margin: 10px 20px 14px;
      }
      .subtitle {
        padding: 0 20px;
        font-size: 12px;
      }
      .createTime {
        padding: 9px 10px 8px;
        font-size: 24px;
        span:last-child {
          margin-top: 11px;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .news-list-box {
    padding: 0 15px;
    justify-content: space-around;
    i {
      width: 0;
    }
    .cur-news-box {
      width: 345px;
      .img {
        width: 345px;
        height: 196px;
        margin-bottom: 10px;
      }
      .title {
        padding: 0 15px;
        font-size: 14px;
      }
      .cen-line {
        width: 24px;
        height: 4px;
        margin: 5px 15px;
      }
      .subtitle {
        padding: 0 15px;
        font-size: 12px;
      }
      .createTime {
        padding: 10px 9px;
        font-size: 16px;
        span:last-child {
          margin-top: 6px;
        }
      }
    }
  }
}
.news-list-box {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  .cur-news-box {
    margin-top: 20px;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    .title {
      display: inline-block;
      box-sizing: border-box;
      color: #333333;
    }
    .cen-line {
      box-sizing: border-box;
      background-color: #333333;
    }
    .subtitle {
      display: inline-block;
      box-sizing: border-box;
      color: #666666;
    }
    .createTime {
      position: absolute;
      top: 0;
      left: 20px;
      background-color: #f1f1f1;
      color: #333333;
      text-align: right;
      span:last-child {
        display: inline-block;
      }
    }
  }
}
</style>
