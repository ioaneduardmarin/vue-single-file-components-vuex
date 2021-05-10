import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import NotificationMessage from '../components/NotificationMessage.vue';

Vue.use(VueI18n);

storiesOf('NotificationMessage', module).add('OldNotificationMessage', () => ({
  components: { NotificationMessage },
  template: '<NotificationMessage type="error">--__--</NotificationMessage>',
}));
