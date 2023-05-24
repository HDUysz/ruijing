<template>
  <div>
    <el-table :data="resData.list" size="medium">
      <el-table-column prop="assetName" label="名称"></el-table-column>
      <el-table-column prop="creditRightFare" label="金额"></el-table-column>
      <el-table-column prop="provinceString" label="地区"></el-table-column>
      <el-table-column prop="startTime" label="时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { getAvailableList } from '@/api/Available/list.js';
export default {
  props: {
    recommand: {
      type: Number,
      default: 2,
    },
    page: {
      type: Number,
      default: 1,
    },
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
        ],
        totalCount: 0,
        pageSize: 0,
        totalPage: 0,
        currPage: 0,
      },
    };
  },
  //   created() {
  //     getAvailableList(this.recommand, this.page).then((res) => {
  //       this.resData = { ...res.data.data };
  //     });
  //   },
};
</script>

<style>
.cell {
  font-size: 1.25rem;
}

.el-table th {
  background-color: #f3f3f3 !important;
  padding: 20px 0 !important;
}

.el-table > tr :first-child {
  margin-left: 10px !important;
}
</style>
