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
  {
    path: '/repositories',
    name: 'githubRepoView',
    component: () =>
    import(
      /* webpackChunkName: "githubRepoView" */ '@/views/GithubRepoView',
    ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
