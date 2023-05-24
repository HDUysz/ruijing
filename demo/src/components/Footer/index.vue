<template>
  <div class="footer-box">
    <div class="top-box">
      <div class="top-body">
        <div class="small-box">
          <h4>关于我们</h4>
          <div>
            <a href="" class="left-element" style="margin-right: 30px"
              >公司简介</a
            >
            <a href="">发展历程</a>
          </div>
          <div>
            <a href="" class="left-element">股东介绍</a>
            <a href="">文化理念</a>
          </div>
          <div>
            <a href="" class="left-element">组织架构</a>
            <a href="">联系我们</a>
          </div>
        </div>
        <div class="small-box">
          <h4>咨询中心</h4>
          <div><a href="">公司新闻</a></div>
          <div><a href="">通知公告</a></div>
        </div>
        <div class="operation-introduce">
          <h4>业务介绍</h4>
          <div>
            <a href="" class="left-element">不良资产经营</a>
            <a href="">金融服务</a>
          </div>
          <div>
            <a href="" class="left-element">合伙企业经营</a>
            <a href="">顾问咨询</a>
          </div>
          <div>
            <a href="" class="left-element" style="margin-right: 67px"
              >投资管理</a
            >
            <a href="">其他服务</a>
          </div>
          <div>
            <a href="">企业纾困</a>
          </div>
        </div>
        <div class="small-box">
          <h4>资产推介</h4>
          <div>
            <a href="">推介信息</a>
          </div>
          <div>
            <a href="">处置公告</a>
          </div>
          <div>
            <a href="">在拍资产</a>
          </div>
        </div>
        <div class="small-box">
          <h4>企业党建</h4>
          <div>
            <a href="">党建品牌</a>
          </div>
          <div>
            <a href="">党建工作</a>
          </div>
          <div>
            <a href="">群团工作</a>
          </div>
        </div>
        <div class="small-box">
          <h4>招贤纳士</h4>
          <div>
            <a href="">招聘公告</a>
          </div>
          <div>
            <a href="">人才队伍</a>
          </div>
        </div>
        <div class="small-box" style="margin-right: 160px">
          <h4>江西瑞京金融资产管理有限公司</h4>
          <div>
            <span class="iconfont icon-location"></span>
          </div>
          <div>
            <span class="iconfont icon-youjian"></span>
          </div>
          <div>
            <span class="iconfont icon-weibiaoti--"></span>
          </div>
        </div>
        <div>
          <h4>微信公众号</h4>
        </div>
      </div>
    </div>
    <hr />
    <div class="bottom-box">
      <p style="margin-bottom: 1rem">111</p>
      <p>222</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-box {
  height: 11%;
  background-color: #333;
  color: hsla(0, 0%, 100%, 0.6);
}

.small-box {
  /* width: 50%; */
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.small-box > div {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.footer-box h4 {
  font-size: 1rem;
  color: #fff;
  margin: 26px 0;
  font-weight: 400;
}

.footer-box hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.top-box {
  padding: 1% 0;
  margin: 0 7%;
  height: 100%;
}

.top-body {
  display: flex;
  padding: 1% 0;
}

.footer-box a {
  line-height: 2;
  color: #fff;
  opacity: 0.6;
}

.operation-introduce {
  margin-right: 70px;
  display: flex;
  flex-direction: column;
}

.operation-introduce > div {
  display: flex;
  justify-content: space-between;
}

.bottom-box {
  text-align: center;
}

.bottom-box p {
  font-size: 1rem;
}
</style>
