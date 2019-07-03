import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from 'rimble-ui'

addDecorator(withA11y)

addParameters({ viewport: {
  defaultViewport: 'responsive'
} });

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Rimble UI',
      brandUrl: 'https://rimble.consensys.design/',
      // To control appearance:
      brandImage: './rimble-logotype.svg',
    }),
    isFullscreen: false,
    showPanel: true,
    panelPosition: 'bottom',
  },
});

const theme1 = {
  ...theme,
  name: 'Rimble Theme'
}
const theme2 = {
  ...theme,
  name: 'Blue Theme',
  colors: {
    ...theme.colors,
    primary: '#2c56dd'
  }
}

const themes = [theme1, theme2];

addDecorator(withThemesProvider(themes));

addDecorator(addReadme);


function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
