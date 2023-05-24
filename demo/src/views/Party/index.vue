<template>
  <div>
    <Header :active="isStatus"></Header>
    <tabbanner
      :title="'企业党建'"
      :en="'PARTY BUILDING'"
      :imgURL="require('@/assets/image/banner@3x.png')"
    ></tabbanner>
    <customertab :tabItems="tabItems" :activeTab.sync="activeTab"></customertab>
    <Layout>
      <div v-if="getTabactive() === 0" class="show-body">
        <div class="content-container party-brand">
          <div class="flex-center">
            <img
              src="https://www.jsamc.com.cn/images/party/06.jpg"
              alt="党建图片"
            />
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <div style="position: relative; padding-left: 1rem">
              <h5 class="title">党建品牌</h5>
              <p class="desc" style="transform: translateY(-0.6rem)">
                党建引领业务发展的
                <span style="color: #e60012; font-size: 1.5rem">"AMC模式"</span>
              </p>
            </div>
            <div style="position: relative; padding-left: 1rem">
              <h5 class="title">工作目标</h5>
              <div class="desc">
                瞄准“化解化解区域金融风险、服务实体经济发展”服务初心，以党建共建为切入点，建立党建引领业务发展的
                <span style="color: #e60012"
                  >目标驱动（
                  <span style="font-size: 0.9rem">Ambition</span>
                  ）、组织推动（
                  <span style="font-size: 0.9rem">Mobilization</span>
                  ）、合作联动（
                  <span style="font-size: 0.9rem">Cooperation</span>
                  )
                </span>
                机制，不断扩大“党建朋友圈”，延伸“金融服务圈”，努力打造党建和业务发展双轮驱动、双向融入的
                <span style="color: #e60012">“AMC模式”</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-center party-work"
          style="background-color: rgb(246, 246, 246); padding-top: 1.5rem"
        >
          <div class="content-container">
            <div>
              <div
                class="title text-large flex-row-center"
                style="line-height: 2; color: rgb(230, 0, 18); font-weight: 400"
              >
                工作措施
              </div>
              <div
                class="desc flex-row-center text-normal"
                style="padding-bottom: 1rem; color: #333"
              >
                围绕党建与业务发展同向发力、互促共进，积极推动基层党组织大力实施“走出去”战略，在“四个覆盖”上下功夫
              </div>
            </div>
            <div class="party-row">
              <div class="item">
                <div
                  class="title flex-row-center text-large"
                  style="color: #333"
                >
                  组织覆盖
                </div>
                <div
                  class="flex-center"
                  style="padding: 0px 4.05rem; height: 100%"
                >
                  <span class="reference"></span>
                  <img src="@/assets/image/party-02.png" alt="pig1" />
                </div>
              </div>
              <div class="item">
                <div
                  class="title flex-row-center text-large"
                  style="color: #333"
                >
                  工作覆盖
                </div>
                <div class="flex-center" style="height: 100%; padding: 0 1rem">
                  <span class="reference"></span>
                  <img src="@/assets/image/party-03.png" alt="pig2" />
                </div>
              </div>
            </div>
            <div class="party-row">
              <div class="item">
                <div
                  class="title flex-row-center text-large"
                  style="color: #333"
                >
                  管理覆盖
                </div>
                <div
                  class="flex-center"
                  style="padding: 0px 4.05rem; height: 100%"
                >
                  <span class="reference"></span>
                  <img src="@/assets/image/party-04.png" alt="pig3" />
                </div>
              </div>
              <div class="item">
                <div
                  class="title flex-row-center text-large"
                  style="color: #333"
                >
                  服务覆盖
                </div>
                <div style="width: 100%">
                  <img
                    src="@/assets/image/party-05.png"
                    style="width: 50%; margin: auto; display: block"
                    alt="pig4"
                  />
                  <div
                    class="text-normal"
                    style="color: #333; text-align: center"
                  >
                    党工群团协同发力，服务党员职工全覆盖，使党建工作有温度、接地气
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="getTabactive() === 1" class="show-body">
        <div class="content-container">
          <div>
            <div v-if="this.currentPage === 1" class="first-row">
              <div class="flex-center">
                <img src="" alt="等待插入图片" />
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                "
              >
                <div>
                  <div :class="['list-title']">{{ newsList[0].topic }}</div>
                  <div class="list-time">{{ newsList[0].time }}</div>
                  <div class="list-desc">
                    {{ newsList[0].details }}
                  </div>
                </div>
                <div>
                  <button type="button" class="btn">
                    <span>查看详情</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="table-wrap">
              <div class="ant-loding">
                <div class="spin-container">
                  <div class="ant-table">
                    <div class="table-container">
                      <div class="table-content">
                        <table style="table-layout: auto">
                          <colgroup></colgroup>
                          <tbody class="table-tbody">
                            <tr v-for="(News, index) in newsList" :key="index">
                              <td
                                v-if="!(getcurrentPage() === 1 && index === 0)"
                                :class="['table-cell']"
                              >
                                <a
                                  href=""
                                  :class="['text-overflow--ellipsis']"
                                  >{{ News.topic }}</a
                                >
                              </td>
                              <td
                                v-if="!(getcurrentPage() === 1 && index === 0)"
                                :class="['table-cell', 'text-nowrap']"
                                style="text-align: right"
                              >
                                {{ News.time }}
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
                  <li v-if="pages[0] > 2" :class="['ant-pagination-item']">
                    ...
                  </li>
                  <li
                    v-for="page in pages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                      { active: currentPage === page },
                      'ant-pagination-item',
                    ]"
                  >
                    {{ page }}
                  </li>
                  <li
                    v-if="pages[pages.length - 1] < totalPages - 1"
                    :class="['ant-pagination-item']"
                    title="向后五页"
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
                      currentPage === totalItems / itemsPerPage
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
                  {{ totalItems / itemsPerPage }}
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
      <div v-if="getTabactive() === 2" class="show-body">
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
                      NcurrentPage === 1 ? 'ant-pagination-item-active' : '',
                    ]"
                  >
                    1
                  </li>
                  <li v-if="Npages[0] > 2" :class="['ant-pagination-item']">
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
    </Layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import tabbanner from '../components/TabBanner/index.vue';
import customertab from '../components/CustomerTab/index.vue';
import Layout from '../components/Layout/index.vue';
import Vue from 'vue';
export default {
  name: 'Party',
  components: {
    Header,
    Footer,
    tabbanner,
    customertab,
    Layout,
  },
  data() {
    return {
      isStatus: 6,
      isShow: true,
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 100,
      NcurrentPage: 1,
      NitemsPerPage: 10,
      NtotalItems: 20,
      newsList: [],
      activeTab: 0,
      tabItems: [
        { text: '党建品牌' },
        { text: '党建工作' },
        { text: '群团工作' },
      ],
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
      // const res = await this.$ajax.get(`/article/news/${this.currentPage}`)
      // if(res){
      //     console.log(res.data.records)
      // }else{
      //     console.log('请求失败了！')
      // }
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
    styleObject() {
      return {
        left: this.posIndex[this.change - 1] + 'px',
      };
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

  .flex-row-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

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

.party-brand {
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;

  & > div {
    width: 120%;
  }

  img {
    padding-right: 24px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    color: #e60012;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 1rem;
    color: #333;
    text-align: justify;
  }
}

img {
  max-width: 100%;
  display: block;
  border-style: none;
}

.party-work {
  .title {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
    color: #e60012;
    margin-bottom: 0.5rem;
  }

  .text-large {
    font-size: 1.5rem;
  }

  .desc {
    font-size: 1rem;
    color: #333;
    text-align: justify;
  }

  .text-normal {
    font-size: 1rem;
  }

  .party-row {
    overflow: hidden;

    .item {
      background-color: #fff;
      float: left;
      width: 48%;
      margin-right: 2%;
      margin-bottom: 1rem;
      border: 1px solid #e6e6e6;
      height: 12.5rem;
      display: flex;
      flex-direction: column;

      .title {
        background-color: #fbfbfb;
        border-bottom: 1px solid #e6e6e6;
        line-height: 2;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
