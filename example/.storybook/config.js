import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { theme } from 'rimble-ui'

const theme1 = {
  ...theme,
  name: 'Rimble'
}
const theme2 = {
  ...theme,
  name: 'ConsenSys',
  colors: {
    ...theme.colors,
    primary: '#2c56dd'
  }
}
const theme3 = {
  ...theme,
  name: 'Salmon',
  colors: {
    ...theme.colors,
    primary: 'salmon'
  }
}

const themes = [theme1, theme2, theme3];

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
