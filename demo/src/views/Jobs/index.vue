<template>
  <div>
    <Header :active="isStatus"></Header>
    <div class="information">
      <tabbanner
        :title="'招贤纳士'"
        :en="'Jobs'"
        :imgURL="require('@/assets/image/job-banner@2x.png')"
      >
      </tabbanner>
      <div class="ant-tab">
        <customtab :tabItems="tabItems" :activeTab.sync="activeTab"></customtab>
        <div class="ant-tab-content">
          <div class="content-body">
            <div v-if="getTabactive() === 0" class="show-body">
              <div class="content-container">
                <div>
                  <div class="table-wrap">
                    <div class="ant-loding">
                      <div class="spin-container">
                        <div class="ant-table">
                          <div class="table-container">
                            <div class="table-content">
                              <table style="table-layout: auto">
                                <colgroup></colgroup>
                                <tbody class="table-tbody">
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="table-cell">
                                      <a href="" class="text-overflow--ellipsis"
                                        >hduhduhduhduhduhduhduhduhduhduhduhduhdu</a
                                      >
                                    </td>
                                    <td
                                      class="table-cell text-nowrap"
                                      style="text-align: right"
                                    >
                                      2023-3-7
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
                          @click="NcurrentPage = prevPage"
                          :disabled="NcurrentPage === 1"
                          :class="[
                            'ant-pagination-prev',
                            NcurrentPage === 1 ? 'ant-pagination-disabled' : '',
                          ]"
                        >
                          上一页
                        </li>
                        <li
                          v-if="Npages[0] > 1"
                          @click="NcurrentPage = 1"
                          :class="[
                            'ant-pagination-item',
                            NcurrentPage === 1
                              ? 'ant-pagination-item-active'
                              : '',
                          ]"
                        >
                          1
                        </li>
                        <li
                          v-if="Npages[0] > 2"
                          :class="['ant-pagination-item']"
                        >
                          ...
                        </li>
                        <li
                          v-for="page in Npages"
                          :key="page"
                          @click="NcurrentPage = page"
                          :class="[
                            { active: NcurrentPage === page },
                            'ant-pagination-item',
                          ]"
                        >
                          {{ page }}
                        </li>
                        <li
                          v-if="Npages[Npages.length - 1] < totalPages - 1"
                          :class="['ant-pagination-item']"
                          title="向后五页"
                        >
                          ...
                        </li>
                        <li
                          v-if="Npages[Npages.length - 1] < totalPages"
                          @click="NcurrentPage = totalPages"
                          :class="['ant-pagination-item']"
                        >
                          {{ totalPages }}
                        </li>
                        <li
                          @click="NcurrentPage = nextPage"
                          :disabled="NcurrentPage === totalPages"
                          :class="[
                            'ant-pagination-next',
                            NcurrentPage === totalItems / NitemsPerPage
                              ? 'ant-pagination-disabled'
                              : '',
                          ]"
                        >
                          下一页
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="show-pages">
                        共
                        {{ NtotalItems / NitemsPerPage }}
                        页
                      </div>
                      <div class="jump-content">
                        到第
                        <input type="text" v-model.number="currentPage" />
                        页
                        <button class="jump-button">跳转</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="getTabactive() === 1" class="show-body">
              <div class="content-container member">
                <h5 class="title">
                  高素质、高效率的人才梯队，80%以上员工持有职业资格证书
                </h5>
                <img
                  src="@/assets/image/001.png"
                  alt="人才图"
                  style="width: 100%"
                />
              </div>
              <div class="member" style="background-color: rgb(246, 246, 246)">
                <div class="content-container">
                  <h5 class="title" style="padding-top: 2rem">
                    多元化、立体化的培训体系，100%服务公司战略规划及全员职业发展
                  </h5>
                  <img
                    src="@/assets/image/002.png"
                    style="width: 100%"
                    alt="人才图2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
import tabbanner from '../components/TabBanner/index.vue';
import customtab from '../components/CustomerTab/index.vue';
import Vue from 'vue';
export default {
  components: {
    Header,
    Footer,
    tabbanner,
    customtab,
  },
  data() {
    return {
      isStatus: 7,
      isShow: true,
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 100,
      NcurrentPage: 1,
      NitemsPerPage: 10,
      NtotalItems: 20,
      newsList: [],
      activeTab: 0,
      tabItems: [{ text: '招聘公告' }, { text: '人才队伍' }],
    };
  },
  methods: {
    getTabactive() {
      return this.activeTab;
    },
    getcurrentPage() {
      return this.currentPage;
    },
    async getNewsList() {
      const res = {
        flag: true,
        data: {
          records: [
            {
              id: 2,
              topic: 'new1',
              details:
                '111111111111111111111111111122222222222222222222222222222333333333333333333333333333333',
              time: '2023-03-16',
              is_deleted: null,
              category: 1,
            },
            {
              id: 3,
              topic: 'new2',
              details:
                '111111111111111111111111111122222222222222222222222222222333333333333333333333333333333',
              time: '2023-03-16',
              is_deleted: null,
              category: 1,
            },
            {
              id: 4,
              topic: 'new3',
              details:
                '111111111111111111111111111122222222222222222222222222222333333333333333333333333333333',
              time: '2023-03-16',
              is_deleted: null,
              category: 1,
            },
          ],
          total: 0,
          size: 10,
          current: 1,
          orders: [],
          optimizeCountSql: true,
          hitCount: false,
          countId: null,
          maxLimit: null,
          searchCount: true,
          pages: 0,
        },
        errorCode: null,
      };
      this.newsList = res.data.records;
      this.itemsPerPage = res.data.size;
    },
  },
  computed: {
    prevPage() {
      if (this.change === 1) return this.currentPage - 1;
      else return this.NcurrentPage - 1;
    },
    nextPage() {
      if (this.change === 1) return this.currentPage + 1;
      else return this.NcurrentPage + 1;
    },
    totalPages() {
      if (this.change === 1)
        return Math.ceil(this.totalItems / this.itemsPerPage);
      else return Math.ceil(this.NtotalItems / this.NitemsPerPage);
    },
    pages() {
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
    Npages() {
      const Nstart = Math.max(1, this.NcurrentPage - 2);
      const Nend = Math.min(this.totalPages, this.NcurrentPage + 2);
      const Npages = [];
      for (let i = Nstart; i <= Nend; i++) {
        Npages.push(i);
      }
      return Npages;
    },
  },
  watch: {
    currentPage(newPage) {
      const maxPage = Math.ceil(this.totalItems / this.itemsPerPage);
      if (newPage < 1) {
        this.currentPage = 1;
      } else if (newPage > maxPage) {
        this.currentPage = maxPage;
      }
    },
    NcurrentPage(newPage) {
      const NmaxPage = Math.ceil(this.NtotalItems / this.NitemsPerPage);
      if (newPage < 1) {
        this.NcurrentPage = 1;
      } else if (newPage > NmaxPage) {
        this.NcurrentPage = NmaxPage;
      }
    },
  },
  created() {
    this.getNewsList();
  },
  mounted() {
    console.log('mounted挂载之后' + this.$route.params.change);
    if (this.$route.params.change !== undefined) {
      console.log(2222222);
      this.change = parseInt(this.$route.params.change);
      Vue.delete(this.$route.params, 'change');
    } else {
      this.change = 1;
      console.log(111111);
    }
    console.log(this.$route.params.change);
    console.log(this.change);
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/news.scss';
.ant-tab-content {
  flex: auto;
  min-width: 0;
  min-height: 0;
}

.content-body {
  margin-top: 40px;
  display: flex;
  width: 100%;
}

.show-body {
  flex: none;
  width: 100%;
  outline: none;
}

.content-container {
  width: 1140px;
  padding: 0 15px;
  margin: auto;
}

.first-row {
  display: flex;
  flex-direction: row;
  line-height: 1;
  border-bottom: 1px solid #f0f0f0;
  padding: 16px;

  & > div:first-child {
    flex: 1 1;
    padding-right: 16px;
  }

  & > div:last-child {
    flex: 2 1;
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.information {
  .list-title {
    font-size: 1.2rem;
    color: #333;
    font-weight: 400;
  }

  .list-time {
    padding-top: 1rem;
    font-size: 1rem;
    color: #999;
  }

  .list-desc {
    padding: 1rem 0;
    line-height: 20px;
  }
}

.btn {
  color: #ff4d4f;
  background: #fff;
  border-color: #ff4d4f;
  outline: 0;
  cursor: pointer;
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid;
  text-transform: none;
  overflow: visible;
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

.ant-table table {
  width: 100%;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;
}

tr:hover {
  background: #fafafa;
  transition: background 0.3s;
}

.ant-active {
  color: #e60012;
  font-weight: 500;
}

.ink-bar {
  width: 72px;
  height: 4px;
  transform: scaleX(1.5);
  bottom: 0;
  transition: width 0.3s, left 0.3s, right 0.3s;
  background-color: #e60012;
  position: absolute;
  pointer-events: none;
}

.pos {
  left: 0;
}

.pos-re {
  left: 160px;
}

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

.member {
  padding-bottom: 1rem;

  .title {
    text-align: center;
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }

  img {
    border: 1px dashed #999;
    max-width: 100%;
    display: block;
  }
}
</style>
