import VueRouter from 'vue-router';

import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/newscenter',
    name: 'newscenter',
    component: () => import('../views/NewsCenter/index.vue'),
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service/index.vue'),
  },
  {
    path: '/party',
    name: 'party',
    component: () => import('../views/Party/index.vue'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/Jobs/index.vue'),
  },
  {
    path: '/available/:id?',
    name: 'available',
    component: () => import('../views/Available/index.vue'),
  },

  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
