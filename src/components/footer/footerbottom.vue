<!-- footer -->
<template>
  <div class="footer-box">
    <div class="footer">
      <div class="left">
        <div class="phone">
          <div>业务微信：13910675619</div>
          <div>售后/投诉微信：13910675619</div>
        </div>
        <div>地址：北京市丰台区蒲安里26号楼5-301</div>
      </div>
      <div class="record">京ICP备2021012090号-1 网站备案号</div>
      <div class="copyright">
        <div>Copyright 2007-2017 All Rights Reserved HDCS Marketing co.,ltd.</div>
        <div>版权所有© handcesar </div>
      </div>
    </div>
  </div>
</template>
<style lang='less' scoped>
@media only screen and (min-width: 1000px) {
  .footer-box {
    margin-top: 20px;
    border-top: 1px solid #d8d8d8;
    padding: 20px 0;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    .footer {
      padding: 0 120px;
      .flex-box(space-between);
      .left {
        .phone {
          .flex-box();
          div + div {
            margin-left: 20px;
          }
        }
      }
      .copyright {
        text-align: right;
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .footer-box {
    padding: 20px 0;
    font-size: 12px;
    color: #333;
    line-height: 18px;
    .record {
      margin-top: 20px;
    }
    .footer {
      padding: 0 15px;
    }
  }
}
</style>
