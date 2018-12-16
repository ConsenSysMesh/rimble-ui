import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Box } from 'rimble-ui'

storiesOf('Layout', module)
  .addDecorator(withDocs(MyREADME))
  .add('Box', () => (
    <Box
      p={5}
      fontSize={4}
      width={[ 1, 1, 1/2 ]}
      color='white'
      bg='salmon'>
      This is a Box
    </Box>
  ))
