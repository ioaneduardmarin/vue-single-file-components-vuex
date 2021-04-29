import axios from 'axios';

export default {
  namespaced: true,

  state: {
    users: [],
    usernames: [],
    username: '',
    isUsernameNullOrEmpty: false,
    isUserSearchButtonDisabled: false,
    wasUserFound: null,
    usernameErrorMessage: '',
    hidden: false,
  },

  getters: {
    getReversedUsers: state => state.users.slice(0).reverse(),
  },

  actions: {
    async searchUser({ state, getters, commit }, value) {
      commit('setUsername', value);
      commit('setWasUserFound', null);
      if (state.usernames.includes(state.username)) {
        return;
      }
      commit('addUsernameToUsernames', state.username);
      commit('enableDisableButton', true);
      try {
        const response = await axios.get(`https://api.github.com/users/${state.username}`);
        commit('addUserToUsers', response.data);
        commit('setWasUserFound', true);
      } catch (err) {
        commit('setUsernameErrorMessage', err);
        commit('setWasUserFound', false);
        commit('removeNonExistingUsername', state.username);
      }
      commit('enableDisableButton', false);
    },
  },

  mutations: {
    setWasUserFound(state, value) {
      state.wasUserFound = value;
    },

    setUsernameErrorMessage(state, error) {
      if (error.message.indexOf('404') !== -1) {
        state.usernameErrorMessage = `Utilizatorul "${state.username}" nu a fost gasit.`;
      } else {
        state.usernameErrorMessage = error.message;
      }
    },

    addUsernameToUsernames: (state, username) => {
      state.usernames.push(username);
    },

    addUserToUsers: (state, user) => {
      state.users.push(user);
    },

    removeNonExistingUsername: (state, value) => {
      state.usernames = state.usernames.filter(username => username !== value);
    },

    enableDisableButton(state, value) {
      state.isUserSearchButtonDisabled = value;
    },

    setUsername(state, value) {
      state.username = value;
    },
  },
};
