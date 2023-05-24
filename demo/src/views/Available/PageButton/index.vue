<template>
  <div>
    <div class="container">
      <div>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-arrow-left"
          class="page-button"
          @click="prevPage"
          >上一页</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-for="(page, index) in pages"
          :key="index"
          @click="changePage(page, index)"
          :class="[
            'button-list',
            currPage === page ? 'button-list-active' : '',
          ]"
          >{{ page }}</el-button
        >
        <el-button
          type="primary"
          size="small"
          icon="el-icon-arrow-right"
          class="page-button"
          @click="nextPage"
          >下一页</el-button
        >
      </div>
      <div class="total-box">
        <div id="total">共 {{ totalPage }} 页</div>
      </div>
      <div class="total-box">
        <div class="total-box">
          <span>到第</span>
          <el-input size="small" v-model="jumpPage"></el-input>
          <span>页</span>
        </div>
      </div>
      <el-button
        type="primary"
        size="mini"
        class="page-button"
        id="jump"
        @click="jumpToPage(jumpPage)"
        >跳转</el-button
      >
    </div>
  </div>
</template>

<script>
import MixJs from './Mixin/index.js';
export default {
  mixins: [MixJs],
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
  margin-bottom: 3.875rem;
  line-height: 0;
  display: flex;
  justify-content: flex-end;
}

.page-button {
  background-color: #333;
  border-color: #333;
  font-size: 1rem;
}

.button-list {
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  border-color: #d9d9d9;
  letter-spacing: 2px;
}

.button-list-active {
  color: #e60012;
  border-color: #66b1ff;
}

.button-list:hover {
  border-color: #66b1ff;
}

.total-box {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

#total {
  margin-left: 1.25rem;
  margin-right: 0.75rem;
}

.el-input {
  width: 3.5rem;
  margin: 0 0.3rem;
}

#jump {
  margin-left: 1rem;
  font-size: 1rem;
}
</style>
