import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withOptions } from '@storybook/addon-options';

import React from 'react';
import { ThemeProvider } from 'rimble-ui'

addDecorator(
  withInfo({
    inline: false
  })
)

addDecorator(
  withOptions({
    name: 'Rimble UI',
    url: 'https://rimble.consensys.design/',
  })
)

addDecorator((story) => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
))

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
