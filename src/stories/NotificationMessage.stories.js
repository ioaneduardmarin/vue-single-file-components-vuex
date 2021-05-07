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
    template: '<NotificationMessage type="error">Eroare</NotificationMessage>',
  }));

storiesOf('NotificationMessage', module)
  .add('NotFoundMessage', () => ({
    components: { NotificationMessage },
    template: '<NotificationMessage type="error">Eroare</NotificationMessage>',
  }));

export const simpleNotification = () => ({
  render() {
    return <NotificationMessage type="error">Mesaj de test</NotificationMessage>;
  },
});

export const TestErrorMessageStory = () => TestErrorMessage;
