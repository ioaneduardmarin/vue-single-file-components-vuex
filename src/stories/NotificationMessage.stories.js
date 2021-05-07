import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { action } from '@storybook/addon-actions';
import TestErrorMessage from './TestErrorMessage.vue';
import NotificationMessage from '../components/NotificationMessage.vue';

Vue.use(VueI18n);

export default {
  title: 'NotificationMessage',
};

export const JSXNotificationMessageStory = () => ({
  props: {
    type: {
      type: String,
      default: 'error',
    },
  },
  render() {
    return <NotificationMessage onClick={action('clicked')} type="error">JSX</NotificationMessage>;
  },
});

export const SFCNotificationMessageStory = () => TestErrorMessage;
