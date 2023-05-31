<template>
  <div>
    <el-table :data="resData.list" size="medium">
      <el-table-column prop="assetName" label="名称">
        <template slot-scope="scope">
          <div class="article-title" @click="viewArticle(scope.row.id)">
            {{ scope.row.assetName }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="creditRightFare"
        label="金额(万元)"
        width="200"
        :formatter="formatCurrency"
      ></el-table-column>
      <el-table-column
        prop="provinceString"
        label="地区"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="startTime"
        label="时间"
        width="200"
      ></el-table-column>
    </el-table>
    <PageButton
      :currPage.sync="resData.currPage"
      :pageSize="resData.pageSize"
      :totalPage="resData.totalPage"
    ></PageButton>
  </div>
</template>

<script>
import { getAvailableList } from '@/api/Available/list.js';
import { EventBus } from '../event-bus';
import { getItem } from '@/api/Available/search';
import PageButton from '../PageButton/index.vue';
export default {
  props: {
    recommand: {
      type: Number,
      default: 2,
    },
  },
  components: {
    PageButton,
  },
  data() {
    return {
      resData: {
        list: [
          {
            assetName: 'test',
            creditRightFare: 'test',
            provinceString: 'test',
            startTime: 'test',
          },
          {
            assetName: 'test',
            creditRightFare: 'test',
            provinceString: 'test',
            startTime: 'test',
          },
        ],
        totalCount: 0,
        pageSize: 10,
        totalPage: 10,
        currPage: 1,
      },
      searchInfo: {},
      initialPage: 1,
      homeRecommand: null,
    };
  },
  methods: {
    viewArticle(id) {
      console.log('调用了viewArticle方法');
      const pid = parseInt(id);
      // 判断当前的 id 是否已经等于要跳转的 id
      this.$router.push({ path: `/available/${pid}` });
    },
    formatCurrency(row) {
      const amount = row.creditRightFare;
      if (amount === null || amount === undefined) {
        return '';
      }

      const formattedAmount = (amount / 10000).toFixed(2);
      return formattedAmount;
    },
  },
  created() {
    //查询所有资产的方法
    this.homeRecommand = this.$route.params.recommand || this.recommand;
    console.log('路由中的参数是:', this.$route.params.recommand);
    getAvailableList(this.homeRecommand, this.initialPage).then((res) => {
      console.log('调用了List的方法', res.data);
      this.resData = { ...res.data.data };
    });
    EventBus.$on('searchItem', (data) => {
      console.log('调用了这个方法');
      this.searchInfo = data;
      //调用查询分页的方法
      getItem(this.searchInfo, 1).then((res) => {
        console.log(this.searchInfo);
        console.log('调用了getItem的方法,并且返回了', res);
        this.resData = { ...res.data.data.page };
      });
    });
  },
  beforeDestroy() {
    EventBus.$off('search');
  },
  watch: {
    'resData.currPage': {
      handler() {
        getAvailableList(this.homeRecommand, this.resData.currPage).then(
          (res) => {
            this.resData = { ...res.data.data };
          }
        );
      },
    },
    searchInfo: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      deep: true,
    },
  },
};
</script>

<style>
.cell {
  font-size: 1.25rem;
  padding: 10px 0 !important;
}

.el-table th {
  background-color: #f7f7f7 !important;
}

.el-table tr :first-child {
  margin-left: 10px !important;
}

.el-table thead {
  color: #333 !important;
}

.article-title {
  cursor: pointer;
}

.article-title:hover {
  color: rgb(0, 86, 179);
}
</style>
