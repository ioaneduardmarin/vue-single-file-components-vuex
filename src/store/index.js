import Vuex from 'vuex';
import Vue from 'vue';
import i18n from '@/i18n/i18nInstance';
import githubUsers from './modules/githubUsers';
import githubRepos from './modules/githubRepos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    githubUsers,
    githubRepos,
  },

  state: {
    currentLanguage: 'ro',
    currentLocale: 'ro',
    languages: ['en', 'ro'],
    // de proba
    locales: ['en', 'fr', 'es', 'zh', 'kr', 'ro'],
  },

  getters: {
    getLanguages: (state) => state.languages,
    getLocales: (state) => state.locales,
  },

  actions: {
    changeLanguage({ commit }, language) {
      commit('changeCurrentLanguge', language);
    },
    changeLocale({ commit }, locale) {
      commit('changeCurrentLocale', locale);
    },
  },

  mutations: {
    changeCurrentLanguge(state, language) {
      state.currentLanguage = language;
      i18n.locale = language;
    },
    changeCurrentLocale(state, locale) {
      state.currentLocale = locale;
      i18n.locale = locale;
    },
  },
});
