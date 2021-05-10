<template>
  <VueI18nProvider v-model="selected" v-slot="{ i18n }">
    <div id="app">
      <div id="nav">
        <ul class="nav-links">
          <li class="links">
            <router-link id="githubUsersViewLink" to="/"
              >{{ $t("messages.appTitleUsers") }}
            </router-link>
          </li>
          |
          <li class="links">
            <router-link id="githubReposViewLink" to="/repositories">
              {{ $t("messages.appTitleRepos") }}
            </router-link>
          </li>
        </ul>
        <select v-model="selected" @change="i18n.locale = selected">
          <option disabled value="">
            {{ $t("messages.selectLanguagePlaceholder") }}
          </option>
          <option
            v-for="language in getLocales"
            :key="language"
            :value="language"
          >
            {{ language }}
          </option>
        </select>
      </div>
      <router-view />
    </div>
  </VueI18nProvider>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import VueI18nProvider from './components/VueI18nProvider';

export default {
  components: { VueI18nProvider },
  data() {
    return {
      selected: '',
    };
  },
  computed: {
    ...mapState({
      currentLanguage: 'currentLanguage',
      currentLocale: 'currentLocale',
    }),

    ...mapGetters({
      getLanguages: 'getLanguages',
      getLocales: 'getLocales',
    }),
  },

  methods: {
    ...mapActions({
      changeLanguage: 'changeLanguage',
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

.links {
  display: inline-flex;
}

#githubUsersViewLink {
  margin-right: 10px;
}

#githubReposViewLink {
  margin-left: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
