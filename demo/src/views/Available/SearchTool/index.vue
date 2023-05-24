<template>
  <div class="search-box">
    <div>
      <div class="input-box">
        <div>
          <label>资产名称</label>
          <el-input type="text" v-model="valueName" size="medium"></el-input>
        </div>
        <div>
          <label>债权抵押物</label>
          <el-select v-model="checkDebt">
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
            v-model="provinceCheck"
            placeholder="请选择省份"
            size="medium"
            style="margin-right: 10px"
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
          <label class="">债权本金下限</label>
          <el-input
            type="text"
            v-model="creditRightFareMin"
            size="medium"
          ></el-input>
        </div>
        <div>
          <label>债权本金上限</label>
          <el-input
            type="text"
            v-model="creditRightFareMax"
            size="medium"
          ></el-input>
        </div>
        <div>
          <label>债权种类</label>
          <el-select
            v-model="assetType"
            placeholder="请选择债权种类"
            size="medium"
            style="margin-right: 10px"
          >
            <el-option
              v-for="item in provinces"
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
import { getItem } from '@/api/Available/search.js';
export default {
  data() {
    return {
      valueName: '',
      provinceCheck: '',
      cityCheck: '',
      checkDebt: '',
      creditRightFareMin: '',
      creditRightFareMax: '',
    };
  },
  computed: {
    provinces() {
      return getProvinces().map((item, index) => {
        return { value: `${index}`, label: `${item}` };
      });
    },
    valueDebt() {
      return getValueDebts().map((item, index) => {
        return { value: `${index}`, label: `${item}` };
      });
    },
    assetTypes() {
      return getAssetTypes().map((item, index) => {
        return { value: `${index}`, label: `${item}` };
      });
    },
    // cities() {
    //   return getCitiesByProvince(this.provinceCheck).map((item) => {
    //     return { value: `${item}`, label: `${item}` };
    //   });
    // },
  },
  methods: {
    searchItem() {
      //查询
      getItem();
    },
    resetForm() {
      //重置表单
      this.valueName = '';
      this.valueType = '';
      this.provinceCheck = '';
      this.cityCheck = '';
      //重新申请第一页的内容
      getItem();
    },
  },
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
