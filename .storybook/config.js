import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchyRootSeparator: /\|/,
});

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
