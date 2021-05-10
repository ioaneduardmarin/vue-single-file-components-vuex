import '../node_modules/semantic-ui-css/semantic.css';
import i18n from '../src/i18n/i18nInstance';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'ro',
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
  (_, { globals }) => {
    // Set the locale here, since currently (v6.2.9) Storybook doesn't re-render Vue components,
    // but the i18n instance is a singleton and the decorator does get executed
    if (i18n.locale !== globals.locale) {
      i18n.locale = globals.locale;
    }

    return {
      i18n,
      template: '<story/>',
    };
  },
];
