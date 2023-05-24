<template>
  <div class="box">
    <div class="title title-adder">
      <p style="margin-bottom: 0">
        友情链接
        <span class="title-english"> / LINKS </span>
      </p>
    </div>
    <ul>
      <li>hdu</li>
      <li>hdu</li>
      <li>hdu</li>
      <li>hdu</li>
      <li>hdu</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 8.5%;
  background: url(@/assets/image/09.png) 0% 0% / 100% no-repeat;
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

.title-adder {
  width: 100%;
  background-size: 20% 3px;
  text-align: center;
  line-height: 1.15;
}

.box ul {
  font-size: 0.9rem;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box ul li a {
  color: rgb(51, 51, 51);
  font-size: 0.9rem;
}
</style>
