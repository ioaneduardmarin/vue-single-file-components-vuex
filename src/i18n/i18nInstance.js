// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ro',
  messages,
});

export default i18n;
