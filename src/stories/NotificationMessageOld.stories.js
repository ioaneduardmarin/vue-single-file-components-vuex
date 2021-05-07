import { storiesOf } from '@storybook/vue';
import NotificationMessage from '../components/NotificationMessage.vue';

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
