import { configure, addDecorator } from '@storybook/react'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const MyTheme = (storyFn) => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
)

addDecorator(MyTheme)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
