<template>
  <div class="body-box">
    <div class="left-body">
      <div class="title">
        <p style="margin-bottom: 0">
          招贤纳士
          <span class="title-english"> / JOIN US </span>
        </p>
        <a href="">
          <span class="more">MORE>></span>
        </a>
      </div>
      <div class="left-news-body">
        <div class="left-body-img">
          <div class="img-show"></div>
        </div>
        <ul>
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
    <div class="right-body">
      <div class="title">
        <p style="margin-bottom: 0">
          处置公告
          <span class="title-english"> / BULLETIN </span>
        </p>
        <a href="">
          <span class="more">MORE>></span>
        </a>
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

.left-body-img {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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

.dividing-a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.img-show {
  height: 144px;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/image/module_top.jpg) center center / cover;
}
</style>
