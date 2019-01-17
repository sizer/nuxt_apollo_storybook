import { storiesOf } from '@storybook/vue';

import Page from '../pages/index.vue';

storiesOf('index', module).add('to Storybook', () => ({
  components: { Page },
  template: '<Page />',
}));

