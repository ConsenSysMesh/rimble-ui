import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Tooltip,
  Icon,
  Flex,
  Text,
  Button,
  OutlineButton,
  TextButton
} from 'rimble-ui'

storiesOf('Tooltip', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <div>
      <Flex justifyContent='space-between' p='4' bg='#f1f1f1'>
        <Tooltip variant='dark' message='Your custom message' placement='top'>
          <OutlineButton>
            "Top"
          </OutlineButton>
        </Tooltip>
        <Tooltip message='Your custom message' placement='right'>
          <OutlineButton>
            "Right"
          </OutlineButton>
        </Tooltip>
        <Tooltip message='Your custom message' placement='bottom'>
          <OutlineButton>
            "Bottom"
          </OutlineButton>
        </Tooltip>
        <Tooltip message='Your custom message' placement='left'>
          <OutlineButton>
            "Left"
          </OutlineButton>
        </Tooltip>
      </Flex>

      <Flex size='80px' mx='auto' my='2' alignItems='center' justifyContent='center'>
        <Tooltip variant='dark' message='Learn more about feature'>
          <Button icononly icon='Info' />
        </Tooltip>
      </Flex>
      <Flex size='80px' mx='auto' my='2' alignItems='center' justifyContent='center'>
        <Tooltip variant='dark' message='Learn more about feature'>
          <OutlineButton icononly icon='Info' />
        </Tooltip>
      </Flex>

      <Flex size='100px' mx='auto' my='3' alignItems='center' justifyContent='center'>
        <Tooltip variant='dark' message='Learn more about feature'>
          <TextButton icononly icon='Info' color='#666' mx='2' />
        </Tooltip>
        <Tooltip variant='dark' message='Show more options'>
          <TextButton icononly icon='MoreHoriz' color='#666' mx='2' />
        </Tooltip>
        <Tooltip variant='dark' message='Edit'>
          <TextButton icononly icon='Edit' color='#666' mx='2' />
        </Tooltip>
      </Flex>

    </div>
  ))
