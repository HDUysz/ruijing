<template>
  <div>
    <Layout>
      <h4>{{ title }}</h4>
      <p>{{ time }}</p>
      <slot name="context"></slot>
      <slot name="file"></slot>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout/index.vue';
export default {
  components: {
    Layout,
  },
  props: {
    title: {
      type: String,
      default: '标题',
    },
    time: {
      type: String,
      default: '时间',
    },
  },
};
</script>

<style></style>
