<template>
  <div class="promo">
    <img src="" alt="待插入图片" />

    <ul class="promo-nav">
      <li><button class="active-button">1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  comments: {},
};
</script>

<style scoped>
.promo {
  position: relative;
  height: 378px;
  background-color: skyblue;
}

.promo img {
  width: 100%;
  height: 100%;
}

.promo-nav {
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -80px;
  width: 160px;
  height: 3px;
}

.promo ul li {
  float: left;
  width: 30px;
  height: 3px;
  margin: 0 5px;
}

.promo ul li button {
  float: left;
  width: 100%;
  border-radius: 1px;
  outline: none;
  cursor: pointer;
  color: transparent;
  border: 0;
  font-size: 0px;
  height: 3px;
  background: #fff;
  opacity: 0.3;
}

.promo ul li button:hover {
  background: #fff;
  opacity: 0.75;
}

.promo ul li .promo {
  opacity: 1;
  background: #fff;
}
</style>
