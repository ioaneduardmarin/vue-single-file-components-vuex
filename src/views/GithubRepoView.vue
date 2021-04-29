<template>
  <div id="github-view" class="ui container">
    <h1>{{ $t("messages.appTitle") }}</h1>
    <ValidationObserver v-slot="{ handleSubmit, invalid }" ref="form" >
      <form @submit.prevent="handleSubmit(onSubmit)" class="inputForm">
        <ValidationProvider
          name="Name"
          :rules="{
            required: true,
            regex: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/gim,
          }"
          v-slot="{ errors }"
        >
          <div class="form-group ui fluid action input inputDiv">
            <input
              class="form-control"
              v-model="username"
              type="text"
              :placeholder="$t('messages.inputPlaceholder')"
            />
            <button
              type="Submit"
              :disabled="isButtonDisabled || invalid"
              class="ui button form-control"
            >
              {{ $t("messages.buttonText") }}
            </button>
          </div>
          <div v-if="errors.length !== 0" class="big ui animated fade button" tabindex="0">
            <div class="visible content">{{$t('messages.validationMessage')}}</div>
            <div class="hidden content">{{$t('messages.validationInstruction')}}</div>
          </div>
        </ValidationProvider>
      </form>
    </ValidationObserver>
    <div class="ui cards cardsDiv">
      <GithubUserCard
        v-for="user in getReversedUsers"
        :key="user"
        :user="user"
      />
    </div>
    <div class="notificationDiv" v-if="wasUserFound === false">
      <notification-message type="error">
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
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'GithubView',
  components: {
    GithubUserCard,
    NotificationMessage,
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      username: '',
    };
  },

  computed: {
    ...mapGetters({
      getInputValidation: 'getInputValidation',
      getReversedUsers: 'getReversedUsers',
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
    onSubmit() {
      this.searchUser(this.username);
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

.cardsDiv {
  margin: 16px 0px 16px 0px;
}

.inputForm{
  margin: 16px 0px 16px 0px;
}
</style>