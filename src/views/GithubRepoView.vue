<template>
  <div id="github-view" class="ui container">
    <h1>{{ $t("messages.appTitleRepos") }}</h1>
    <ValidationObserver v-slot="{ handleSubmit, invalid }" ref="form">
      <form @submit.prevent="handleSubmit(onSubmit)" class="inputForm">
        <div class="form-group ui fluid action input inputDiv">
          <input
            class="form-control"
            v-model="searchCriteria"
            type="text"
            :placeholder="$t('messages.repoSearchInputPlaceholder')"
          />
          <button
            type="Submit"
            :disabled="isRepoSearchButtonDisabled || invalid"
            class="ui button form-control"
          >
            {{ $t("messages.buttonText") }}
          </button>
        </div>
      </form>
    </ValidationObserver>
    <div class="ui items itemsDiv">
      <GithubRepoItem v-for="repo in repos" :key="repo" :repo="repo" />
    </div>
    <div class="notificationDiv" v-if="wasRepoSearched === false">
      <notification-message type="error">
        <p>
          {{ repoErrorMessage }}
        </p>
      </notification-message>
    </div>
  </div>
</template>

<script>
import GithubRepoItem from '@/components/GithubRepoItem.vue';
import NotificationMessage from '@/components/NotificationMessage.vue';
import { createNamespacedHelpers } from 'vuex';
import { ValidationObserver } from 'vee-validate';

const { mapState, mapActions } = createNamespacedHelpers('githubRepos');

export default {
  name: 'GithubRepoView',
  components: {
    GithubRepoItem,
    NotificationMessage,
    ValidationObserver,
  },

  data() {
    return {
      searchCriteria: '',
    };
  },

  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
    ...mapState([
      'isSearchCriteriaNullOrEmpty',
      'isRepoSearchButtonDisabled',
      'wasRepoSearched',
      'repoErrorMessage',
    ]),
  },

  methods: {
    ...mapActions(['searchRepo']),
    onSubmit() {
      this.searchRepo(this.searchCriteria);
    },
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

.itemsDiv {
  margin: 16px 0px 16px 0px;
}

.inputForm {
  margin: 16px 0px 16px 0px;
}
</style>
