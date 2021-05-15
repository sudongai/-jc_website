<!-- 服务 -->
<template>
  <div>
    <!-- 服务经验 -->
    <div class="banner">
      <div class="banner-item"
           v-for="(item,index) in bannerList"
           :key="index">
        <div class="iconbox0">
          <div class="iconbox1 ctt">
            <i class="iconfont color-red ctt"
               :class="item.iconName"></i>
          </div>
        </div>
        <p class="number color-red">{{item.number}}</p>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
    <!-- 服务案例 -->
    <div class="case-list">
      <div class="case-item"
           v-for="(item,index) in caseList"
           :key="index">
        <img :src="item.img"
             style="width:100%;"
             alt="">
        <div class="c-box">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@api'
import { mapState } from 'vuex'
export default {
  name: 'service',
  data () {
    return {
      bannerList: [
        {
          iconName: 'icon-jizhiwanmei',
          number: '1000+',
          desc: '超过1000次成功经验'
        },
        {
          iconName: 'icon-fuwu',
          number: '10+',
          desc: '10年专业服务历程'
        },
        {
          iconName: 'icon-licheng',
          number: '500+',
          desc: '服务于500余家国内外企业'
        }
      ],
      caseList: [
        {
          title: '品牌策略',
          content: '品牌定位、形象设计、战略规划、品牌营销、媒介服务、广告投放',
          img: require('@common/imgs/Img_ppcl.jpg')
        }, {
          title: '活动策划',
          content: '活动策划公司专注于线下活动的策划与执行，专业有序地组织市场活动，提供精彩创意与对活动的精准把握',
          img: require('@common/imgs/Img_hdch.jpg')
        }, {
          title: '场地服务',
          content: '海量数据、精准信息、快速搜索轻松对比、替您砍价、帮您选优',
          img: require('@common/imgs/Img_cdfw.jpg')
        }, {
          title: '影视制作',
          content: '宣传片拍摄、广告片制作、广告宣传视频拍摄、线下活动拍摄、云摄影、小视频',
          img: require('@common/imgs/Img_yszz.jpg')
        }, {
          title: '搭建服务',
          content: 'LED、舞美设备',
          img: require('@common/imgs/Img_djfw.jpg')
        }, {
          title: '团建',
          content: '素质拓展、趣味运动会、定向拓展、高空拓展、水上项目、主题团建等',
          img: require('@common/imgs/Img_tj.jpg')
        }
      ]
    }
  },
  props: [],
  components: {},
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>
<style lang='less' scoped>
.banner {
  .flex-box(space-between);
  align-items: center;
  .banner-item {
    .flex-box();
    flex-direction: column;
    align-items: center;
    .iconbox0 {
      background: #fafafa;
      border-radius: 50%;
      position: relative;
      .iconbox1 {
        border-radius: 50%;
        background: #f1f1f1;
      }
    }
    .color-red {
      color: @red;
    }
  }
}
@media only screen and (min-width: 1000px) {
  .banner {
    .bis("../../assets/imgs/Img_fw_jy.jpg");
    padding: 0 351px;
    height: 330px;
    .banner-item {
      .iconbox0 {
        .wh(70px, 70px);
        .iconbox1 {
          .wh(50px,50px);
          .iconfont {
            font-size: 24px;
          }
          .icon-fuwu {
            font-size: 31px;
          }
        }
      }
      .number {
        margin: 30px 0 15px;
        font-size: 50px;
      }
      .desc {
        font-size: 12px;
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .banner {
    .bis("../../assets/imgs/Img_bg_jy.jpg");
    height: 198px;
    .banner-item {
      flex: 1;
      height: 60%;
      justify-content: normal;
      .iconbox0 {
        .wh(40px, 40px);
        .iconbox1 {
          .wh(29px,29px);
          .iconfont {
            font-size: 12px;
          }
          .icon-fuwu {
            font-size: 18px;
          }
        }
      }
      .number {
        margin: 10px 0 5px;
        font-size: 25px;
      }
      .desc {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
.case-list {
  .flex-box(space-between);
  flex-wrap: wrap;
  .case-item {
    color: #fff;
    box-sizing: border-box;
    position: relative;
    .c-box {
      position: absolute;
      .title {
        font-weight: bold;
      }
    }
  }
}
@media only screen and (min-width: 1000px) {
  .case-list {
    .case-item {
      width: 33.33%;
      .c-box {
        top: 80px;
        left: 20px;
        .title {
          .ft-sizeLineheight(20px,20px);
          margin: 0 0 20px;
        }
        .content {
          .ft-sizeLineheight(14px,22px);
        }
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .case-list {
    .case-item {
      .c-box {
        top: 122px;
        left: 0;
        padding: 0 15px;
        .title {
          .ft-sizeLineheight(14px,14px);
          margin: 0 0 5px;
        }
        .content {
          .ft-sizeLineheight(12px,18px);
        }
      }
    }
  }
}
</style>
