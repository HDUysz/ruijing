import Vue from 'vue';
import App from './App.vue';
import router from './router';
import EmelmentUI from 'element-ui';
import http from '@/untils/http.js';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/global.css';
import '@/style/icon/iconfont.css';
Vue.config.productionTip = false;
Vue.use(EmelmentUI);
Vue.prototype.$ajax = http;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
