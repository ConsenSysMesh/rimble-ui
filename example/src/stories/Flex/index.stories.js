import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Flex, Box } from 'rimble-ui'

storiesOf('Layout', module)
  .addDecorator(withDocs(MyREADME))
  .add('Flex', () => (
    <Flex>
      <Box
        p={3}
        width={1/2}
        color='salmon'
        bg='black'>
        Flex
      </Box>
      <Box
        p={3}
        width={1/2}
        color='white'
        bg='salmon'>
        Box
      </Box>
    </Flex>
  ))
