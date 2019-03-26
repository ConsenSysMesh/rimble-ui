import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Slider, Box } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Slider', () =>
  <Box textAlign={'left'}>
  <Box>
  <Slider /><br />
  </Box>
  <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
  <code>{'<Slider />'}</code>
  </Box>
  </Box>
)
