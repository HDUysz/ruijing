<template>
  <div class="ant-tab-nav">
    <div class="ant-tab-wrap">
      <div class="nav-list">
        <div
          v-for="(item, index) in tabItems"
          :key="index"
          class="tab-item"
          ref="tabs"
        >
          <img v-if="item.icon" :src="item.icon" alt="Icon" />
          <a
            @click="setActiveTab(index)"
            :class="[
              'ant-tab-tab',
              activeTab === index ? 'ant-active' : '',
              index !== tabItems.length - 1 ? 'ant-tabs-tab-left' : '',
            ]"
          >
            {{ item.text }}
          </a>
        </div>
        <div :class="['ink-bar']" :style="styleObject"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: Number,
      required: true,
    },
    tabItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      styleObject: {},
    };
  },
  watch: {
    activeTab() {
      this.updateInkBar();
      // console.log(22222222);
    },
    currentActiveTab(newVal) {
      console.log(2222);
      this.$emit('update:activeTab', newVal);
    },
  },
  mounted() {
    this.updateInkBar();
  },
  methods: {
    setActiveTab(index) {
      // console.log(1111111111111111);
      this.currentActiveTab = index;
      this.updateInkBar();
    },
    updateInkBar() {
      this.$nextTick(() => {
        const tab = this.$refs.tabs[this.currentActiveTab];
        if (tab) {
          const imgElement = tab.querySelector('img');
          const textElement = tab.querySelector('a');
          const imgWidth = imgElement ? imgElement.offsetWidth : 0;
          const textWidth = textElement ? textElement.offsetWidth : 0;
          this.styleObject = {
            left: `${tab.offsetLeft}px`,
            width: `${imgWidth + textWidth}px`,
          };
        }
      });
    },
  },
  computed: {
    currentActiveTab: {
      get() {
        return this.activeTab;
      },
      set(val) {
        this.$emit('update:activeTab', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-tab-nav {
  background: #f5f5f5;
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  margin: 0 0 16px;
  font-size: 18px;
  line-height: 3;

  &::before {
    border-bottom: 1px solid #e5e5e5;
    bottom: 0;
    position: absolute;
    right: 0;
    left: 0;
    content: '';
    line-height: 3;
  }

  &::after {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
    left: 0;
    box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 8%);
    top: 0;
    bottom: 0;
    width: 30px;
  }
}

.ant-tab-wrap {
  display: flex;
  justify-content: center;
  position: relative;
  flex: auto;
  align-self: stretch;
  overflow: hidden;
  white-space: nowrap;
  transform: translate(0);
}
.ink-bar {
  height: 4px;
  transform: scaleX(1.5);
  bottom: 0;
  transition: width 0.3s, left 0.3s, right 0.3s;
  background-color: #e60012;
  position: absolute;
  pointer-events: none;
}

.nav-list {
  transform: translate(0px, 0px);
  position: relative;
  display: flex;
  transition: transform 0.3s, -webkit-transform 0.3s;

  a:hover {
    color: #e60012;
  }
}

.ant-tab-tab {
  font-weight: 400;
  font-size: 1.2rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  background: transparent;
  cursor: pointer;
}

.ant-tabs-tab-left {
  margin-right: 5rem;
}

.ant-active {
  color: #e60012;
  font-weight: 500;
}

.nav-list img {
  display: inline-block;
  padding-right: 9.5px;
  vertical-align: middle;
}
</style>
