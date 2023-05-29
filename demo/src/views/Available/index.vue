<template>
  <div>
    <Header :active="5"></Header>
    <tabbanner
      :title="'资产推介'"
      :en="'AVAILABLE'"
      :imgURL="require('@/assets/image/assets_top_bg.png')"
      :color="'rgba(0,0,0,.85)'"
    ></tabbanner>
    <customertab
      :tab-items="tabItems"
      :activeTab.sync="activeTab"
    ></customertab>
    <Layout>
      <SearchTool v-if="!id"></SearchTool>
      <List v-if="!id"></List>
      <AssetShow v-if="id" :id="id"></AssetShow>
    </Layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
import tabbanner from '../components/TabBanner/index.vue';
import customertab from '../components/CustomerTab/index.vue';
import Layout from '../components/Layout/index.vue';
import SearchTool from './SearchTool/index.vue';
import List from './List/index.vue';
import AssetShow from './AssetShow/index.vue';
export default {
  components: {
    Header,
    Footer,
    tabbanner,
    customertab,
    Layout,
    SearchTool,
    List,
    AssetShow,
  },
  data() {
    return {
      activeTab: 0,
      tabItems: [{ text: '推介信息' }],
      id: null,
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id) || null;
  },
  beforeRouteUpdate(to, from, next) {
    console.log(from, to);
    if (to.name === 'available') {
      this.id = parseInt(to.params.id);
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/news.scss';
</style>
