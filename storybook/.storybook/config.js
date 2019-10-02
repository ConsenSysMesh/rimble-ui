import { configure, addParameters } from '@storybook/react';
import rimbleTheme from './rimbleTheme';

addParameters({
  options: {
    theme: rimbleTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
