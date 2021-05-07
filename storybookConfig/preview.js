import '../node_modules/semantic-ui-css/semantic.css';
import i18n from '../src/i18n/i18nInstance';

export const parameters = {
  actions: { yargTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  () => ({
    i18n,
    beforeCreate() {
      // eslint-disable-next-line no-underscore-dangle
      this.$root._i18n = this.$i18n;
    },
    template: '<story/>',
  }),
];
