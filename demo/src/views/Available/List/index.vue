<template>
  <div>
    <el-table :data="resData.list" size="medium">
      <el-table-column prop="assetName" label="名称"></el-table-column>
      <el-table-column
        prop="creditRightFare"
        label="金额(万元)"
        width="300"
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
    };
  },
  created() {
    getAvailableList(this.recommand, this.initialPage).then((res) => {
      this.resData = { ...res.data.data };
      EventBus.$emit('list-event', { listData: this.resData });
    });
  },
  watch: {
    'resData.currPage': {
      handler() {
        getAvailableList(this.recommand, this.resData.currPage).then((res) => {
          this.resData = { ...res.data.data };
          EventBus.$emit('list-event', this.resData);
        });
      },
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
  background-color: #f3f3f3 !important;
}

.el-table tr :first-child {
  margin-left: 10px !important;
}

.el-table thead {
  color: #333 !important;
}
</style>
