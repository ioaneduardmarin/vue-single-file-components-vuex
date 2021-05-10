import '../node_modules/semantic-ui-css/semantic.css';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import i18n from '../src/i18n/i18nInstance';

export const parameters = {
  actions: { yargTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story, { globals }) => ({
    i18n,
    beforeCreate() {
      // eslint-disable-next-line no-underscore-dangle
      this.$root._i18n = this.$i18n;
      this.$i18n.locale = globals.locale;
    },
    template: '<story/>',
  }),
];

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: ':us:', title: 'English' },
        { value: 'fr', right: ':fr:', title: 'Français' },
        { value: 'es', right: ':es:', title: 'Español' },
        { value: 'zh', right: ':cn:', title: '中文' },
        { value: 'kr', right: ':kr:', title: '한국어' },
        { value: 'ro', right: ':ro:', title: 'Romana' },
      ],
    },
  },
};
