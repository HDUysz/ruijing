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
      <SearchTool></SearchTool>
      <List v-if="!id"></List>
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
export default {
  components: {
    Header,
    Footer,
    tabbanner,
    customertab,
    Layout,
    SearchTool,
    List,
  },
  data() {
    return {
      activeTab: 0,
      tabItems: [
        { text: '推介信息' },
        { text: '处置公告' },
        { text: '在拍资产' },
      ],
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id || '';
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/news.scss';
</style>
