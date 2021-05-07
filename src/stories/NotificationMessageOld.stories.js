import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import NotificationMessage from '../components/NotificationMessage.vue';

Vue.use(VueI18n);

storiesOf('NotificationMessage', module).add('RONotificationMessage', () => ({
  components: { NotificationMessage },
  template: '<NotificationMessage type="error">Ro</NotificationMessage>',
}));

storiesOf('NotificationMessage', module).add('ENNotificationMessage', () => ({
  components: { NotificationMessage },
  template: '<NotificationMessage type="error">En</NotificationMessage>',
}));
