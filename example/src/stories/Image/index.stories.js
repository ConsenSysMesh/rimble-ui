import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Image, Box, Text } from 'rimble-ui'

storiesOf('Rimble-UI/Image', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
    <Box>
    <Image
      width={[ 1, 1, 1/2 ]}
      src='https://source.unsplash.com/random/1280x720'
      borderRadius={8}
      alt="random unsplash image"
    />
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
    <code>{'<Image'}</code><br />
      <code>{'width={[ 1, 1, 1/2 ]}'}</code><br />
      <code>{'src="https://source.unsplash.com/random/1280x720"'}</code><br />
      <code>{'borderRadius={3}'}</code><br />
    <code>{'/>'}</code><br />
    </Box>
    </Box>
    </Box>
  ))
