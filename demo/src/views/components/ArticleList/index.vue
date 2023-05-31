<template>
  <div>
    <div class="first-page" v-if="isFirstPage">
      <div class="flex-center">
        <el-img :src="firstArticle.img"></el-img>
      </div>
      <div class="first-article">
        <div>
          <div class="list-title">{{ firstArticle.topic }}</div>
          <div class="list-time">{{ firstArticle.time }}</div>
          <div class="list-desc">{{ firstArticle.details }}</div>
        </div>
        <div>
          <el-button type="text">
            <span>查看详情</span>
          </el-button>
        </div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="topic"
        label="文章标题"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column
        prop="time"
        label="发布时间"
        align="right"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleList } from '@/api/ArticleList/article';
export default {
  props: {
    articleType: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      articleData: {
        records: [],
        total: null,
        size: null,
        current: null,
      },
    };
  },
  created() {
    getArticleList(this.articleType, 1).then((res) => {
      this.articleData = { ...res.data.data };
    });
  },
  computed: {
    isFirstPage() {
      return this.articleData.current === 1;
    },
    firstArticle() {
      return this.isFirstPage ? this.articleData.records[0] : {};
    },
    tableData() {
      return this.isFirstPage
        ? this.articleData.records.slice(1)
        : this.articleData.records;
    },
  },
};
</script>

<style scoped>
.first-article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
