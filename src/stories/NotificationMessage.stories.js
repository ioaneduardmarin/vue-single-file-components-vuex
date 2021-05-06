import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import TestErrorMessage from './TestErrorMessage.vue';
import NotificationMessage from '../components/NotificationMessage.vue';

Vue.use(VueI18n);

export default {
  title: 'NotificationMessage',
};

storiesOf('NotificationMessage', module)
  .add('ErrorMessage', () => ({
    components: { NotificationMessage },
    template: '<NotificationMessage>Eroare</NotificationMessage>',
    i18n: new VueI18n({
      locale: 'ro',
      messages: {
        en: {
          messages: { errorTitle: 'Error' },
        },
        ro: {
          messages: { errorTitle: 'Eroare' },
        },
      },
    }),
  }));

storiesOf('NotificationMessage', module)
  .add('NotFoundMessage', () => ({
    components: { NotificationMessage },
    template: '<NotificationMessage>Eroare</NotificationMessage>',
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          messages: { errorTitle: 'Error' },
        },
        ro: {
          messages: { errorTitle: 'Eroare' },
        },
      },
    }),
  }));

export const simpleNotification = () => ({
  i18n: new VueI18n({
    locale: 'en',
    messages: {
      en: {
        messages: { errorTitle: 'Error' },
      },
      ro: {
        messages: { errorTitle: 'Eroare' },
      },
    },
  }),
  props: {
    type: {
      type: String,
      default: 'error',
    },
  },
  render() {
    return <NotificationMessage type="error">Mesaj de test</NotificationMessage>;
  },
});

export const TestErrorMessageStory = () => TestErrorMessage;
