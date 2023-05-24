<template>
  <div class="tab_banner" :style="bannerStyle">
    <div style="font-size: 2.25rem">{{ title }}</div>
    <div style="font-size: 1rem">{{ en }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    en: {
      type: String,
      default: '',
    },

    imgURL: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: '',
    },
  },

  data() {
    return {};
  },

  computed: {
    imgurl() {
      return this.imgURL;
    },

    bannerStyle() {
      return {
        background: `url(${this.imgurl}) no-repeat 50%`,
        backgroundSize: 'cover',
        color: this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
