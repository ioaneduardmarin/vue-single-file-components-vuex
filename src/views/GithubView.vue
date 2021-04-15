<template>
  <div
    id="github-view"
    class="ui container"
  >
    <h1>GitHub Profiles</h1>
    <div class="ui fluid action input inputDiv">
      <input
        v-model="username"
        type="text"
        placeholder="Search..."
        @change="inputValidation"
      >
      <button
        :disabled="isButtonDisabled"
        class="ui button"
        @click="searchUser(username)"
      >
        Search
      </button>
    </div>
    <div class="ui cards cardsDiv">
      <GithubUserCard
        v-for="user in reversedUsers"
        :key="user"
        :user="user"
      />
    </div>
    <div class="notificationDiv">
      <notification-message
        v-if="wasUserFound === false"
        type="error"
        header="Eroare!"
      >
        <p>
          {{ errorMessage }}
        </p>
      </notification-message>
    </div>
  </div>
</template>

<script>
import GithubUserCard from '@/components/GithubUserCard';
import NotificationMessage from '@/components/NotificationMessage';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'GithubView',
  components: {
    GithubUserCard,
    NotificationMessage,
  },

  data() {
    return {
      username: '',
    };
  },

  computed: {
    ...mapGetters({
      inputValidation: 'inputValidation',
      reversedUsers: 'reversedUsers',
    }),

    ...mapState({
      isUsernameNullOrEmpty: 'isUsernameNullOrEmpty',
      isButtonDisabled: 'isButtonDisabled',
      wasUserFound: 'wasUserFound',
      errorMessage: 'errorMessage',
    }),
  },

  methods: {
    ...mapActions({
      searchUser: 'searchUser',
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.inputDiv {
  margin: 16px 0px 16px 0px;
}

.notificationDiv {
  margin: 16px 0px 16px 0px;
}

.cardsDiv {
  margin: 16px 0px 16px 0px;
}
</style>