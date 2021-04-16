import Vue from 'vue';
import VueRouter from 'vue-router';
import githubView from '@/views/GithubView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'githubView',
    component: githubView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
