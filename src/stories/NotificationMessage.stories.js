import Vue from 'vue';
import VueI18n from 'vue-i18n';
import TestErrorMessage from './TestErrorMessage.vue';
import NotificationMessage from '../components/NotificationMessage.vue';

Vue.use(VueI18n);

export default {
  title: 'NotificationMessage',
};

export const simpleNotification = () => ({
  render() {
    return <NotificationMessage type="error">Mesaj de test</NotificationMessage>;
  },
});

export const TestErrorMessageStory = () => TestErrorMessage;
