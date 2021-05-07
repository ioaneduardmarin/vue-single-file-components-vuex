<template>
  <div class="locale-changer">
    <select v-model="selected" @change="changeLanguage(selected)">
      <option v-for="lang in langs" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import i18n from '../i18n/i18nInstance';

export default {
  name: 'locale-changer',
  data() {
    return { langs: ['en', 'ro'] };
  },
  methods: {
    changeLanguage(language) {
      i18n.locale = language;
    },
  },
};
</script>
