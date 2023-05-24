<template>
  <div class="content-container">
    <div class="table-wrap">
      <div class="ant-loding">
        <div class="spin-container">
          <div class="ant-table">
            <div class="table-container">
              <div class="table-content">
                <table style="table-layout: auto">
                  <colgroup></colgroup>
                  <tbody class="table-tbody">
                    <tr v-for="(item, index) in newsList" :key="index">
                      <td class="table-cell">
                        <a href="" class="text-overflow--ellipsis">{{
                          item.topic
                        }}</a>
                      </td>
                      <td
                        class="table-cell text-nowrap"
                        style="text-align: right"
                      >
                        {{ item.time }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div>
        <ul class="ant-pagination">
          <li
            @click="currentPage = prevPage"
            :disabled="currentPage === 1"
            :class="[
              'ant-pagination-prev',
              currentPage === 1 ? 'ant-pagination-disabled' : '',
            ]"
          >
            上一页
          </li>
          <li
            v-if="pages[0] > 1"
            @click="currentPage = 1"
            :class="[
              'ant-pagination-item',
              currentPage === 1 ? 'ant-pagination-item-active' : '',
            ]"
          >
            1
          </li>
          <li v-if="pages[0] > 2" :class="['ant-pagination-item']">...</li>
          <li
            v-for="page in pages"
            :key="page"
            @click="currentPage = page"
            :class="[{ active: currentPage === page }, 'ant-pagination-item']"
          >
            {{ page }}
          </li>
          <li
            v-if="pages[pages.length - 1] < totalPages - 1"
            :class="['ant-pagination-item']"
            title="向后五页"
            @click="currentPage = currentPage + 5"
          >
            ...
          </li>
          <li
            v-if="pages[pages.length - 1] < totalPages"
            @click="currentPage = totalPages"
            :class="['ant-pagination-item']"
          >
            {{ totalPages }}
          </li>
          <li
            @click="currentPage = nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'ant-pagination-next',
              currentPage === totalPages ? 'ant-pagination-disabled' : '',
            ]"
          >
            下一页
          </li>
        </ul>
      </div>
      <div>
        <div class="show-pages">
          共
          {{ totalPages }}
          页
        </div>
        <div class="jump-content">
          到第
          <input type="text" v-model.number="jumpPage" />
          页
          <button class="jump-button" @click="jumpToPage(jumpPage)">
            跳转
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleMixin from './ArticleMixin/ArticleMixin.js';
import { getArticleList } from '@/api/ArticleList/article';

export default {
  mixins: [ArticleMixin],
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    jumpToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchData();
      } else {
        this.$message.error('请输入正确的页码');
      }
    },

    fetchData() {
      // Use your API call here to fetch the data
      // Remember to set this.totalItems to the total number of items
      // And set this.newsList to the list of news
      getArticleList(this.type, this.currentPage).then((res) => {
        this.newsList = res.data.records;
        this.itemsPerPage = res.data.total;
        this.totalPages = res.data.pages;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  width: 1140px;
  padding: 0 15px;
  margin: auto;

  .page-box {
    margin-top: 2rem;
    margin-bottom: 3.875rem;
    line-height: 0;
    display: flex;
    justify-content: flex-end;

    & > div {
      float: left;
    }

    .ant-pagination {
      float: left;
      margin: 0;
      padding: 0;
      list-style: none;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5715;
      -webkit-font-feature-settings: 'tnum';
      font-feature-settings: 'tnum', 'tnum';
    }
  }
}

.ant-pagination-prev {
  padding: 0 22px;
  color: #fff;
  background-color: #333;
  border: none;
}
.table-wrap {
  clear: both;
  max-width: 100%;

  & ::before {
    display: table;
    content: '';
  }

  & ::after {
    display: table;
    clear: both;
    content: '';
  }

  .ant-loding {
    position: relative;
  }

  .spin-container {
    position: relative;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .ant-table {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    z-index: 0;
    font-size: 14px;
    background: #fff;
    border-radius: 2px;
  }

  .table-container {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;

    &::before {
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      width: 30px;
      -webkit-transition: -webkit-box-shadow 0.3s;
      transition: -webkit-box-shadow 0.3s;
      transition: box-shadow 0.3s;
      transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
      content: '';
      pointer-events: none;
    }

    &::after {
      right: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      width: 30px;
      -webkit-transition: -webkit-box-shadow 0.3s;
      transition: -webkit-box-shadow 0.3s;
      transition: box-shadow 0.3s;
      transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
      content: '';
      pointer-events: none;
    }
    .table-tbody {
      width: 100%;
      text-align: left;
      border-radius: 2px 2px 0 0;
      border-collapse: separate;
      border-spacing: 0;
    }

    .table-cell {
      padding: 14px 16px;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
      font-size: 1.2rem;
      overflow-wrap: break-word;

      a:hover {
        color: rgb(0, 86, 179);
      }
    }

    .text-nowrap {
      white-space: nowrap;
    }

    .text-overflow--ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.ant-pagination-disabled:hover {
  cursor: not-allowed;
}
.ant-pagination .ant-pagination-disabled {
  border: 1px solid #cbcbcb;
  color: #ccc;
  background-color: #fff;
}
.ant-pagination-item-active {
  color: #e60012;
  border-color: #cbcbcb;
  font-weight: 500;
  background: #fff;
}
.ant-pagination-next,
.ant-pagination-prev {
  padding: 0 22px;
  color: #fff;
  background-color: #333;
  border: none;
}

.ant-pagination-item a,
.ant-pagination-next,
.ant-pagination-prev {
  font-size: 14px;
}

.ant-pagination-next,
.ant-pagination-prev {
  font-family: Arial, Helvetica, sans-serif;
  outline: 0;
}

.ant-pagination-jump-next,
.ant-pagination-jump-prev,
.ant-pagination-next,
.ant-pagination-prev {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.ant-pagination-jump-next,
.ant-pagination-jump-prev,
.ant-pagination-prev {
  margin-right: 8px;
}

.ant-pagination-item {
  min-width: 32px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  text-align: center;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ant-pagination-item,
.ant-pagination-total-text {
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  line-height: 30px;
  vertical-align: middle;
}

.ant-pagination li {
  float: left;
  margin: 0 5px;
}

.ant-upload,
.ant-upload-select-picture-card,
.pagination-h5 {
  display: flex;
}

.show-pages {
  float: left;
  margin-left: 1.25rem;
  margin-right: 0.75rem;
  height: 2rem;
  line-height: 1.875rem;
  vertical-align: middle;
  font-size: 0.875rem;
}

.jump-content {
  float: left;
  height: 2rem;
  line-height: 1.875rem;
  vertical-align: middle;
  font-size: 0.875rem;
}

.jump-content > input {
  width: 3rem;
  height: 96%;
  vertical-align: middle;
  margin-bottom: 0.25rem;
  border: 0.0625rem solid #cbcbcb;
}

.jump-button {
  height: 1.875rem;
  width: 2.875rem;
  margin-left: 0.75rem;
  border: none;
  background-color: #333;
  color: #fff;
}
</style>
