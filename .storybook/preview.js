import '../node_modules/semantic-ui-css/semantic.css';
import i18n from '../src/i18n/i18nInstance';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'en', title: 'English' },
        { value: 'ro', right: 'ro', title: 'Romanian' },
      ],
    },
  },
};

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
  (_, { globals }) => ({
    i18n,
    beforeCreate() {
      // eslint-disable-next-line no-underscore-dangle
      this.$root._i18n = this.$i18n;
      this.$i18n.locale = globals.locale;
    },
    template: '<story/>',
  }),
];
