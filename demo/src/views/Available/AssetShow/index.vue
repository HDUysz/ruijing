<template>
  <div>
    <el-row>
      <el-col class="flex-center">
        <h4 class="title">{{ detil.assetName }}</h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="flex-center">
        <p class="fare">
          <strong>债权本金：</strong><span>¥{{ detil.creditRightFare }}元</span>
        </p>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 3rem">
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
      <el-carousel-item v-for="item in images" :key="item.id">
        <el-image :src="`${item.image}`"></el-image>
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
    <el-collapse accordion class="collapse-show">
      <el-collapse-item>
        <template slot="title">
          债券抵押物（{{ collaterals.length }}）条
        </template>
        <div v-for="(item, index) in collaterals" :key="item.id">
          <p class="content-child">{{ index + 1 }}、{{ item.assetName }}</p>
          <p class="content-child">
            <b>抵押物类型：</b>{{ item.collateralTypeString }}
          </p>
          <p class="content-child"><b>抵押物坐落：</b>{{ item.location }}</p>
          <p class="content-child"><b>抵押物描述：</b>{{ item.description }}</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="债权保证人">
        <template slot="title">
          债权保证人（{{ guarantees.length }}）个
        </template>
        <div v-for="(item, index) in guarantees" :key="item.id">
          <p class="content-child">
            保证人{{ index + 1 }}、{{ item.guaranteeName }}
          </p>
          <p class="content-child"><b>担保方式：</b>{{ item.methodString }}</p>
        </div>
      </el-collapse-item>
      <el-collapse-item title="资产亮点">
        <template slot="title">
          资产亮点（{{ highlights.length }}）条
        </template>
        <div v-for="(item, index) in highlights" :key="item.id">
          <p class="content-child">
            {{ index + 1 }}、{{ item.highlightTitle.replace(/【|】/g, '') }}
          </p>
          <p class="content-child">
            {{ item.hightlightContent }}
          </p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { getDetil } from '@/api/Available/detil.js';
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
    getDetil(this.id).then((res) => {
      console.log('生命周期中的getDetil被调用了', res.data);
      this.articleInfo = { ...res.data.data };
      console.log(Array.isArray(this.articleInfo.collateral));
      console.log(Array.isArray(this.articleInfo.guarantees));
      console.log(Array.isArray(this.articleInfo.images));
    });
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
    collaterals() {
      return Array.isArray(this.articleInfo.collateral)
        ? this.articleInfo.collateral
        : [];
    },
    guarantees() {
      return Array.isArray(this.articleInfo.guarantees)
        ? this.articleInfo.guarantees
        : [];
    },
    highlights() {
      return Array.isArray(this.articleInfo.assetVoInDetail.highlights)
        ? this.articleInfo.assetVoInDetail.highlights
        : [];
    },
    images() {
      return Array.isArray(this.articleInfo.images)
        ? this.articleInfo.images
        : [];
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
  margin-bottom: 2rem;
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

.fare span {
  color: rgb(0, 86, 179);
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

.collapse-show {
  margin-top: 5rem;
}

.el-collapse-item__header {
  font-size: 15pt;
  font-family: '宋体';
  font-weight: 600;
  text-indent: 2em;
}
</style>
