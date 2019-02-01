import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Tooltip,
  Icon,
  Flex,
  Text
} from 'rimble-ui'

storiesOf('Tooltip', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <div>
      <Text textAlign='center' my={3}>
        <Tooltip variant='dark' message='Your custom message' placement='top'>
            hover me
        </Tooltip>
      </Text>
      <Text textAlign='center' my={3}>
        <Tooltip message='Your custom message' placement='right'>
          hover me
        </Tooltip>
      </Text>
      <Text textAlign='center' my={3}>
        <Tooltip message='Your custom message' placement='bottom'>
          hover me
        </Tooltip>
      </Text>
      <Text textAlign='center' my={3}>
        <Tooltip message='Your custom message' placement='left'>
          hover me
        </Tooltip>
      </Text>

      <Flex size='80px' borderRadius='100%' mx='auto' my='5' bg='#ccc' alignItems='center' justifyContent='center'>
        <Tooltip message='Wrap me around your tooltip trigger'>
          <Icon name='Info' />
        </Tooltip>
      </Flex>
    </div>
  ))
