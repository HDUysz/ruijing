<template>
  <div class="search-box">
    <div>
      <div class="input-box">
        <div>
          <label>资产名称</label>
          <el-input type="text" v-model="valueName" size="medium"></el-input>
        </div>
        <div>
          <label>资产类别</label>
          <!-- <el-input type="text" v-model="valueType" size="medium"></el-input>
           -->
          <el-select
            v-model="valueCheck"
            placeholder="请选择资产类别"
            size="medium"
            style="margin-right: 10px"
          >
            <el-option
              v-for="item in valueType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
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
import { getProvinces, getValueTypes } from './CityMap/CityMap.js';
import { getItem } from '@/api/Available/search.js';
export default {
  data() {
    return {
      valueName: '',
      provinceCheck: '',
      cityCheck: '',
      valueCheck: '',
    };
  },
  computed: {
    provinces() {
      return getProvinces().map((item) => {
        return { value: `${item}`, label: `${item}` };
      });
    },
    valueType() {
      return getValueTypes().map((item, index) => {
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
  // watch: {
  //   valueCheck(newVal, OldVal) {
  //     console.log(newVal, OldVal);
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
