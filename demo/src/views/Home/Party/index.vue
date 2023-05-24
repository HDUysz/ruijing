<template>
  <div class="body-box">
    <div class="left-body">
      <div class="title">
        <p style="margin-bottom: 0">
          党建工作
          <span class="title-english"> / SERVICE </span>
        </p>
        <a href="">
          <span class="more">MORE>></span>
        </a>
      </div>
      <div class="left-news-body">
        <ul>
          <li>
            <a
              style="display: block; width: 100%; height: 100%; color: #000"
              href=""
            >
              <div class="party-first-row">
                <div class="party-show-img party-build-img"></div>
                <div class="party-build-content">
                  <p class="content-title">111</p>
                  <p class="content-time">222</p>
                  <div class="content">
                    <div class="inner-text">
                      为进一步激发公司党建工作驱动力，增强地方AMC品牌影响力，3月6日，江苏资产管理有限公司与湖南省财信资产管理有限公司（以下简称“财信资产”）签约党建共建协议，并开展交流座谈会。财信资产党总支书记、董事长万少科，副总经理邓冰，财信资产常德公司董事长符国伟；江苏资产党委书记、董事长汤兴良，党委副书记、纪委书记黄圣哲，党委委员、副总经理余昭朋，以及双方相关人员参加签约仪式和交流座谈。
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-body">
      <div class="title">
        <p style="margin-bottom: 0">
          通知公告
          <span class="title-english"> / NOTICE </span>
        </p>
        <div
          v-on:click="
            $router.push({
              name: 'newscenter',
              params: {
                change: 2,
              },
            })
          "
          style="cursor: pointer"
        >
          <span class="more">MORE>></span>
        </div>
      </div>
      <div class="notice-list-body">
        <ul class="notice-ul">
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
          <li>
            <a href="" class="dividing-a">
              <p class="li-title">11111111111111</p>
              <span class="li-time"> 2023-02-15 </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body-box {
  padding: 44px 8.5%;
  display: flex;
  justify-content: space-between;
  background: url(@/assets/image/09.png) 0% 0% / 100% no-repeat;
}

.left-body {
  width: 65%;
}

.title {
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 31px;
  color: #958167;
  background: url('@/assets/image/08.png') no-repeat 0 100%;
  position: relative;
  background-size: 20% 3px;
}

.title::after {
  width: 100%;
  height: 1px;
  content: '';
  bottom: 1px;
  position: absolute;
  left: 0;
  background-color: rgba(141, 115, 92, 0.15);
}

.title-english {
  font-size: 19px;
  color: rgba(31, 40, 56, 0.65);
}

.more {
  color: #958167;
  font-size: 1rem;
}

.right-body {
  flex-grow: 1;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
}

.left-news-body {
  margin-top: 2rem;
}

.left-news-body ul li {
  line-height: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.left-news-body ul li + li {
  border-top: 1px solid rgba(141, 115, 92, 0.15);
}

.party-first-row {
  padding-left: 420px;
  position: relative;
  height: 230px;
}

.party-build-img {
  left: 0;
  position: absolute;
  width: 420px;
  height: 210px;
  margin-bottom: 20px;
}

.party-show-img {
  background: url(#) auto 100% no-repeat center;
}

.party-build-content {
  margin-left: 2%;
}

.content-title {
  max-width: 100%;
  color: rgb(51, 51, 51);
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 3;
}

.content-time {
  max-width: 62%;
  min-width: 88px;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  line-height: 15px;
  color: rgb(153, 153, 153);
  font-size: 1rem;
}

.content {
  color: #999;
  max-height: 120px;
  line-height: 24px;
  overflow: hidden;
  font-size: 1rem;
  box-sizing: border-box;
  padding-right: 15px;
}

.content::before {
  float: left;
  content: '';
  width: 10px;
  height: 120px;
}

.content::after {
  float: right;
  position: absolute;
  content: '...';
  width: 24px;
  height: 24px;
  left: 100%;
  top: 85%;
  transform: translate(-100%, -100%);
}

.inner-text {
  width: 100%;
  float: right;
  margin-left: -24px;
  word-break: break-all;
}

.dividing-a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.li-left {
  max-width: 75%;
  font-size: 1.2rem;
}

.li-title {
  margin: 0px;
  color: rgb(51, 51, 51);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.2rem;
}
.li-time {
  font-weight: 400;
  line-height: 35px;
  color: rgb(153, 153, 153);
  opacity: 1;
  font-size: 1.2rem;
}

.notice-list-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.notice-ul {
  flex-grow: 1;
}

.notice-ul li {
  line-height: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.notice-ul li + li {
  border-top: 1px solid rgba(141, 115, 92, 0.15);
}
</style>
