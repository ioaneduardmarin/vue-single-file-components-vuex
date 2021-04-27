import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store/index';
import i18nInstance from '@/i18n/i18nInstance';
import App from '@/App';
import router from './router';

import './validation';


Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  i18n: i18nInstance,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
