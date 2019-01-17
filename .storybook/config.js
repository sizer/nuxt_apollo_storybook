import { configure, addDecorator } from '@storybook/vue';
import Decorator from './Decorator'

addDecorator(story => ({
  components: { Decorator },
  template: `
    <Decorator>
      <story slot="story"></story>
    </Decorator>
  `,
}));

// automatically import all files ending in *.stories.js
const req = require.context('~/pages', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
