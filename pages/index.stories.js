import { storiesOf } from '@storybook/vue';

import Index from '~/pages/index.vue';

storiesOf('index', module)
  .add('Indexページ', () => ({
    components: { Index },
    template: '<Index slot="story" />'
  }));

