<template>
  <div>
    <el-row>
      <el-col class="flex-center">
        <h4 class="title">{{ detil.assetName }}</h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="flex-center">
        <p class="fare"><strong>债权本金：</strong>¥{{ 1 }}元</p>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 1.5rem">
      <el-col :span="12" class="flex-center"
        ><i
          class="el-icon-alarm-clock"
          style="display: flex; align-items: center; margin-right: 0.1rem"
        ></i>
        <p>开始时间:{{ detil.startTime }}</p></el-col
      >
      <el-col :span="12" class="flex-center">
        <i
          class="el-icon-alarm-clock"
          style="display: flex; align-items: center; margin-right: 0.1rem"
        ></i>
        <p>下架时间: {{ detil.endTime }}</p></el-col
      >
    </el-row>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image :src="require('@/assets/image/job-banner@2x.png')"></el-image>
      </el-carousel-item>
    </el-carousel>
    <p class="content" style="margin-top: 4rem"><b>债权情况：</b></p>
    <p class="content-child"><strong>所在地址：</strong>{{ detil.address }}</p>
    <p class="content-child"><b>债权银行：</b>{{ detil.creditRightBank }}</p>
    <p class="content-child">
      <b>诉讼状态：</b>{{ detil.litigationStatusString }}
    </p>
    <p class="content-child"><b>管辖法院：</b>{{ detil.competentCourt }}</p>
    <p class="content-child"><b>处置方式：</b>{{ posal }}</p>
  </div>
</template>

<script>
// import { getDetil } from '@/api/Available/list.js';
import { getPosalType } from '../dict';
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      articleInfo: {
        images: [],
        collateral: [],
        guarantees: [],
        assetVoInDetail: [],
      },
    };
  },
  created() {
    // getDetil(this.id).then((res) => {
    //   this.articleInfo = { ...res.data.data };
    // });
  },
  computed: {
    detil() {
      return this.articleInfo.assetVoInDetail;
    },
    fare() {
      return this.articleInfo.assetVoInDetail.creditRightFare.toLocaleString(
        'en-US',
        { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      );
    },
    posal() {
      return getPosalType(this.articleInfo.assetVoInDetail.disposalMethod);
    },
  },
};
</script>

<style>
.el-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.time-size {
  font-size: 0.875rem;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.fare {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.content {
  font-size: 15pt;
  text-indent: 2em;
  font-family: '宋体';
  margin-bottom: 1rem;
}

.content-child {
  text-indent: 4em;
  margin-bottom: 1rem;
  font-family: '宋体';
  font-size: 12pt;
}
</style>
