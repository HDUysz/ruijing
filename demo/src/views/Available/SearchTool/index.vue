<template>
  <div class="search-box">
    <div>
      <div class="input-box">
        <div>
          <label>资产名称</label>
          <el-input
            type="text"
            v-model="queryInfo.key"
            size="medium"
          ></el-input>
        </div>
        <div>
          <label>债权抵押物</label>
          <el-select v-model="queryInfo.collateralType" multiple collapse-tags>
            <el-option
              v-for="item in valueDebt"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <label style="width: 30%">地区</label>
          <el-select
            v-model="queryInfo.province"
            placeholder="请选择省份"
            size="medium"
            style="margin-right: 10px"
            multiple
            collapse-tags
          >
            <el-option
              v-for="item in provinces"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <!-- <el-select v-model="cityCheck" placeholder="请选择城市" size="medium">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select> -->
        </div>
      </div>
      <div class="input-box">
        <div>
          <label style="width: 50%">债权本金下限</label>
          <el-input
            type="text"
            v-model="queryInfo.creditRightFareMin"
            size="medium"
          ></el-input>
        </div>
        <div>
          <label style="width: 50%">债权本金上限</label>
          <el-input
            type="text"
            v-model="queryInfo.creditRightFareMax"
            size="medium"
          ></el-input>
        </div>
        <div>
          <label>债权种类</label>
          <el-select
            v-model="queryInfo.assetType"
            placeholder="请选择债权种类"
            size="medium"
            style="margin-right: 10px"
          >
            <el-option
              v-for="item in assetTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="input-botton">
        <el-button
          type="primary"
          size="medium"
          style="
            width: 120px !important;
            font-size: 1rem;
            background: #e60012;
            border-color: #e60012;
          "
          @click="searchItem"
          >查询</el-button
        >
        <el-button
          type="primary"
          size="medium"
          style="
            width: 100px !important;
            font-size: 1rem;
            background-color: #333;
            border-color: #333;
          "
          @click="resetForm"
          >重置</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  getProvinces,
  getValueDebts,
  getAssetTypes,
} from './CityMap/CityMap.js';
import { EventBus } from '../event-bus';
export default {
  data() {
    return {
      queryInfo: {
        key: '',
        province: '',
        collateralType: '',
        assetType: '',
        creditRightFareMin: '',
        creditRightFareMax: '',
      },
    };
  },
  computed: {
    provinces() {
      return this.mapToValueLabel(getProvinces);
    },
    valueDebt() {
      return this.mapToValueLabel(getValueDebts);
    },
    assetTypes() {
      return this.mapToValueLabel(getAssetTypes);
    },
    // cities() {
    //   return getCitiesByProvince(this.provinceCheck).map((item) => {
    //     return { value: `${item}`, label: `${item}` };
    //   });
    // },
  },
  methods: {
    searchItem() {
      const transformQueryInfo = this.queryInfo;
      EventBus.$emit('searchItem', transformQueryInfo);
    },
    resetForm() {
      //重置表单
      for (let key in this.queryInfo) {
        this.queryInfo[key] = '';
      }
    },
    mapToValueLabel(fn) {
      return fn().map((item, index) => {
        return { value: `${index}`, label: `${item}` };
      });
    },
  },
  // watch: {
  //   queryInfo: {
  //     handler(newVal, oldVal) {
  //       //监听表单的变化
  //       console.log(newVal, oldVal);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.search-box {
  background-color: #f7f7f7;
  margin-bottom: 2rem;

  label {
    display: inline-block;
    width: 40%;
  }
  .input-box {
    padding: 2.4375rem 1.5rem 1.875rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .input-botton {
    padding-left: 6%;
    padding-bottom: 2.4375rem;
  }
}
</style>
