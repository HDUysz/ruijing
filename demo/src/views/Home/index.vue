<template>
  <div>
    <Header :active="isStatus"></Header>
    <Promo></Promo>
    <AssetMessment></AssetMessment>
    <pre-news></pre-news>
    <Party></Party>
    <Join></Join>
    <Links></Links>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
import Promo from './Promo/index.vue';
import AssetMessment from './AssetMessment/index.vue';
import PreNews from './PreNews/index.vue';
import Party from './Party/index.vue';
import Join from './Join/index.vue';
import Links from './Links/index.vue';
export default {
  components: {
    Footer,
    Header,
    Promo,
    AssetMessment,
    PreNews,
    Party,
    Join,
    Links,
  },
  data() {
    return {
      isStatus: 1,
    };
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
