import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Box } from 'rimble-ui'

storiesOf('Box', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <Box
      p={5}
      fontSize={4}
      width={[ 1, 1, 1/2 ]}
      color='white'
      bg='salmon'>
      This is a Box
    </Box>
  ))
