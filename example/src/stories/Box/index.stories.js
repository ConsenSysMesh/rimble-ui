import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Box } from 'rimble-ui'

storiesOf('Box', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <Box my='2' mx='auto' p='3' bg='grey' color='primary'>
      This is a box
    </Box>
  ))
