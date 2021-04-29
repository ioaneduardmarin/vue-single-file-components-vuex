import axios from 'axios';

export default{
  namespaced: true,

  state: {
    searchCriteria: '',
    repos: [],
    isRepoInput: false,
    isSearchCriteriaNullOrEmpty: false,
    wasRepoSearched: null,
    repoErrorMessage: '',
    isRepoSearchButtonDisabled: false,
  },

  getters: {
    getRepoSearchResult: state => axios.get(`https://api.github.com/search/repositories?q=${state.searchCriteria}`),
  },

  actions: {
    async searchRepo({ state, getters, commit }, value) {
      commit('setSearchCriteria', value);
      commit('showProperNotification', null);
      commit('enableDisableButton', true);
      try {
        const response = await getters.getRepoSearchResult;
        commit('storeSearchedRepos', response.data.items);
        commit('showProperNotification', true);
      } catch (err) {
        commit('throwProperErrorMessage', err);
        commit('showProperNotification', false);
      }
      commit('enableDisableButton', false);
    },
  },

  mutations: {
    storeSearchedRepos(state, value) {
      state.repos = value;
    },

    showProperNotification(state, value) {
      state.wasRepoSearched = value;
    },

    enableDisableButton(state, value) {
      state.isRepoSearchButtonDisabled = value;
    },

    setSearchCriteria(state, value) {
      state.searchCriteria = value;
    },
  },
};
