<template>
  <div id="github-view" class="ui container">
    <h1>{{ $t("messages.appTitleUsers") }}</h1>
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
              :placeholder="$t('messages.usernameInputPlaceholder')"
            />
            <button
              type="Submit"
              :disabled="isUserSearchButtonDisabled || invalid"
              class="ui button form-control"
            >
              {{ $t("messages.buttonText") }}
            </button>
          </div>
          <div v-if="errors.length !== 0" class="big ui animated fade button" tabindex="0">
            <div class="visible content">{{$t('messages.usernameValidationMessage')}}</div>
            <div class="hidden content">{{$t('messages.usernameValidationInstruction')}}</div>
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
          {{ usernameErrorMessage }}
        </p>
      </notification-message>
    </div>
  </div>
</template>

<script>
import GithubUserCard from '@/components/GithubUserCard.vue';
import NotificationMessage from '@/components/NotificationMessage.vue';
import { createNamespacedHelpers } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('githubUsers');

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
    ...mapGetters([
      'getReversedUsers',
    ]),

    ...mapState([
      'isUsernameNullOrEmpty',
      'isUserSearchButtonDisabled',
      'wasUserFound',
      'usernameErrorMessage',
    ]),
  },

  methods: {
    ...mapActions([
      'searchUser',
    ]),
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
