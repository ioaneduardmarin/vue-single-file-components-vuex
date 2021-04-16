import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/i18n/i18n';
import store from '@/store/index';
import App from '@/App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
