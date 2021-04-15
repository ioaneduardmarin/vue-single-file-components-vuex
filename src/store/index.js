import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { },

  state: {
    users: [],
    usernames: [],
    username: '',
    isUsernameNullOrEmpty: false,
    isButtonDisabled: false,
    wasUserFound: null,
    errorMessage: '',
    hidden: false,
  },

  getters: {
    inputValidation: (state) => {
      if ((state.username.trim() || '') === '') {
        return false;
      }
      return true;
    },

    reversedUsers: state => state.users.slice(0).reverse(),

    getGithubUser: state => axios.get(`https://api.github.com/users/${state.username}`) },

  actions: {
    async searchUser({ state, getters, commit }, value) {
      commit('setUsername', value);
      commit('showProperNotification', null);
      if (!getters.inputValidation) {
        return;
      }
      if (state.usernames.includes(state.username)) {
        return;
      }
      commit('addUsernameToUsernames', state.username);
      commit('enableDisableButton', true);
      try {
        const response = await getters.getGithubUser;
        commit('addUserToUsers', response.data);
        commit('showProperNotification', true);
      } catch (err) {
        commit('throwProperErrorMessage', err);
        commit('showProperNotification', false);
        commit('removeInexistentUsername', state.username);
      }
      commit('enableDisableButton', false);
    },

    hideNotification({ commit }) {
      commit('hide', true);
    },
  },

  mutations: {
    showProperNotification(state, value) {
      state.wasUserFound = value;
    },

    throwProperErrorMessage(state, error) {
      if (error.message.indexOf('404') !== -1) {
        state.errorMessage = `Utilizatorul "${state.username}" nu a fost gasit.`;
      } else {
        state.errorMessage = error.message;
      }
    },

    addUsernameToUsernames: (state, username) => {
      state.usernames.push(username);
    },

    addUserToUsers: (state, user) => {
      state.users.push(user);
    },

    removeInexistentUsername: (state, value) => {
      state.usernames = state.usernames.filter(username => username !== value);
    },

    enableDisableButton(state, value) {
      state.isButtonDisabled = value;
    },

    hide(state) {
      state.hidden = true;
    },

    setUsername(state, value) {
      state.username = value;
    },
  },
});
