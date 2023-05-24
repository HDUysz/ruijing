<template>
  <div>
    <div class="rooter">
      <div class="header">
        <div class="logo">
          <img src="../../assets/image/logo.png" alt="logo" @click="gotoHome" />
        </div>
        <div class="right-box">
          <div class="nav">
            <ul>
              <li>
                <router-link to="/home" :class="{ active: active == 1 }"
                  >首页</router-link
                >
              </li>
              <li>
                <router-link to="" :class="{ active: active == 2 }"
                  >关于我们</router-link
                >
              </li>
              <li>
                <router-link to="/newscenter" :class="{ active: active == 3 }"
                  >咨询中心</router-link
                >
              </li>
              <li>
                <router-link to="/service" :class="{ active: active == 4 }"
                  >业务介绍</router-link
                >
              </li>
              <li>
                <router-link to="/available" :class="{ active: active == 5 }"
                  >资产推介</router-link
                >
              </li>
              <li>
                <router-link to="/party" :class="{ active: active == 6 }"
                  >企业党建</router-link
                >
              </li>
              <li>
                <router-link to="/jobs" :class="{ active: active == 7 }"
                  >招贤纳士</router-link
                >
              </li>
            </ul>
          </div>
          <div class="search">
            <input type="text" value="请输入" />
            <button type="button">
              <span class="iconfont icon-search"></span>
            </button>
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
  methods: {
    gotoHome() {
      this.$router.push('/home');
    },
  },
  props: {
    active: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
$header-height: 120px;

.rooter {
  height: $header-height;
  padding: 0.5% 0.5%;
}
.header {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 5%;
  .right-box {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
  }

  .nav {
    width: 80%;
  }
}

@media (min-width: 768px) {
}

.logo {
  display: flex;
  align-items: center;
  width: 15%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

.nav {
  display: flex;
  justify-content: center;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
}

.nav ul li {
  // display: flex;
  /* align-items: center; */
}

.active {
  border-bottom: 4px solid #e60012;
  background-color: #fafafa;
  color: #e60012 !important;
}

.nav ul li a {
  display: block;
  height: 45px;
  padding: 0 0.8rem;
  line-height: 45px;
  font-size: 1.2rem;
  color: #333;
}

.search {
  display: flex;
  margin-left: auto;
  margin-top: 10px;
  width: 20%;
}

.search input {
  height: 34px;
  width: 135px;
  border: 1px solid #d9d9d9;
  border-right: 0;
  font-size: 14px;
  color: #bfbfbf;
  padding-left: 15px;
  outline: none;
}

.search button {
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;
  color: #fff;
  background-size: 36px auto;
  background-color: #e60012;
  cursor: pointer;
}
</style>
