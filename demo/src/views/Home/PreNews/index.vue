<template>
  <div class="body-box">
    <div class="left-body">
      <div class="title">
        <p>
          公司新闻
          <span class="title-english">/ NEWS</span>
        </p>
        <router-link to="/newscenter">
          <span class="more">MORE>></span>
        </router-link>
      </div>
      <div class="news">
        <div class="news-left">
          <a href="">
            <div>
              <div class="image-show"></div>
              <div>
                <p>111</p>
                <p>111</p>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <ul class="news-right">
        <a href="">
          <li class="news-li">
            <div class="news-li-left">
              <p>07</p>
              <p>2023/3</p>
            </div>
            <div class="new-li-right">
              <h3></h3>
              <div class="news-text">
                <div class="text_text"></div>
              </div>
            </div>
          </li>
        </a>
        <a href="">
          <li class="news-li">
            <div class="news-li-left">
              <p>07</p>
              <p>2023/3</p>
            </div>
            <div></div>
          </li>
        </a>
        <a href="">
          <li class="news-li">
            <div class="news-li-left">
              <p>07</p>
              <p>2023/3</p>
            </div>
            <div></div>
          </li>
        </a>
      </ul>
    </div>
    <div class="right-body">
      <div class="title">
        <p style="margin-bottom: 0">
          业务介绍
          <span class="title-english"> / SERVICE </span>
        </p>
      </div>
      <div class="content">
        <div
          class="home-row"
          style="display: flex; margin-top: 3rem; flex-grow: 1"
        >
          <div
            class="home-col-12 flex-center linear_red"
            style="margin-right: 1rem"
          >
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 1,
                  },
                })
              "
            >
              <img
                style="width: 50px"
                src="@/assets/image/01.png"
                alt="不良资产经营图片"
              />
              <span style="color: #fff">不良资产经营</span>
            </div>
          </div>
          <div class="home-col-12 flex-center linear_blue">
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 2,
                  },
                })
              "
            >
              <img style="width: 50px" src="@/assets/image/02.png" alt="" />
              <span style="color: #fff">合伙企业管理</span>
            </div>
          </div>
        </div>
        <div
          class="home-row"
          style="display: flex; margin-top: 1rem; flex-grow: 1"
        >
          <div
            class="home-col-12 flex-center linear_orange"
            style="margin-right: 1rem"
          >
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 3,
                  },
                })
              "
            >
              <img style="width: 50px" src="@/assets/image/03.png" alt="" />
              <span style="color: #fff">投资管理</span>
            </div>
          </div>
          <div class="home-col-12 flex-center linear_red">
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 4,
                  },
                })
              "
            >
              <img style="width: 50px" src="@/assets/image/04.png" alt="" />
              <span style="color: #fff">企业纾困</span>
            </div>
          </div>
        </div>
        <div
          class="home-row"
          style="display: flex; margin-top: 1rem; flex-grow: 1"
        >
          <div
            class="home-col-12 flex-center linear_blue"
            style="margin-right: 1rem"
          >
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 5,
                  },
                })
              "
            >
              <img style="width: 50px" src="@/assets/image/05.png" alt="" />
              <span style="color: #fff">金融服务</span>
            </div>
          </div>
          <div class="home-col-12 flex-center linear_orange">
            <div
              class="flex-center"
              style="width: 100%; height: 100%"
              v-on:click="
                $router.push({
                  path: '/service',
                  query: {
                    change: 6,
                  },
                })
              "
            >
              <img style="width: 50px" src="@/assets/image/06.png" alt="" />
              <span style="color: #fff">更多其他业务</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.body-box {
  padding: 44px 8.5%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
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

.news {
  margin-top: 3rem;
}

.news-left {
  float: left;
  width: 420px;
}

.image-show {
  background: url('@/assets/image/module_bg.png') no-repeat center;
  width: 420px;
  height: 210px;
  overflow: hidden;
  background-size: cover;
  border-radius: 12px;
}

.news-right {
  float: left;
  margin-left: 1.5%;
  margin-bottom: 0px;
  border-bottom: 1px solid rgb(229, 229, 229);
}

.news-li {
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(229, 229, 229);
  padding-top: 21px;
  margin-bottom: 21px;
}

.news-li-left p {
  color: rgb(149, 129, 103);
  font-weight: 400;
  line-height: 21px;
  padding: 0px;
  margin: 0px;
}

.news-li-left p:first-child {
  font-size: 2.5rem;
  height: 55px;
  line-height: 55px;
  text-align: center;
}

.new-li-right {
  margin-left: 26px;
  flex-grow: 1;
}

.new-li-right h3 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  width: 509px;
  color: rgb(51, 51, 51);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.new-li-right > div {
  margin: 0px;
  color: rgb(153, 153, 153);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-line-clamp: 2;
}

.news-text {
  max-height: 48px;
  line-height: 24px;
}

.new-text::before {
  float: left;
  content: '';
  width: 10px;
  height: 48px;
}

.text_text {
  float: right;
  width: 100%;
  margin-left: -24px;
  word-break: break-all;
  padding-right: 15px;
}

.right-body {
  flex-grow: 1;
  margin-left: 2%;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content > .home-row {
  cursor: pointer;
}

.home-row {
  display: flex;
}

.home-col-12 {
  width: 50%;
  border-radius: 12px;
}

.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.linear_red {
  background: linear-gradient(131deg, #fd8790, #e60113);
}

.linear_blue {
  background: linear-gradient(128deg, #63c8ff, #246ef8);
}

.linear_orange {
  background: linear-gradient(139deg, #fec694, #ff9434);
}
</style>
