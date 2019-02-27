import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from 'rimble-ui'

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

addDecorator(
  withOptions({
    name: 'Rimble UI',
    url: 'https://rimble.consensys.design/',
  })
)

addDecorator(withThemesProvider(themes));

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
