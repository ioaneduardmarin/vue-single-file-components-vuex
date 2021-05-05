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
    languages: ['en', 'ro'],
  },

  getters: {
    getLanguages: (state) => state.languages,
  },

  actions: {
    changeLanguage({ commit }, language) {
      commit('changeCurrentLanguge', language);
    },
  },

  mutations: {
    changeCurrentLanguge(state, language) {
      state.currentLanguage = language;
      i18n.locale = language;
    },
  },
});
