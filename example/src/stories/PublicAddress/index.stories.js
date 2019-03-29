import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { PublicAddress, Box, Text } from 'rimble-ui'

storiesOf('PublicAddress', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
  <Box ml={3} textAlign={'left'}>
  <Box>
    <PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  </Box>
  <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
    <code>{'<PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"/>'}</code>
  </Box>
  </Box>
  ))
