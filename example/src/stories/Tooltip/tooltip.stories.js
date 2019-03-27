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
  TextButton,
  Box,
  Heading,
} from 'rimble-ui'

storiesOf('Tooltip', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box textAlign={'left'}>
    <Box>
    <Heading.h2>Tooltip examples</Heading.h2>
    <Text>Different ways to use the tooltip component</Text>
    <br />
    </Box>
    <Box>
    <Heading.h4>Placement</Heading.h4>
    <Text.p>Adjust where your tooltip appears on hover</Text.p>
        <Tooltip message='Your custom message' placement='top'>
          <OutlineButton mb={3}>
            "Top"
          </OutlineButton>
        </Tooltip><br />
        <Tooltip message='Your custom message' placement='right'>
          <OutlineButton mb={3}>
            "Right"
          </OutlineButton>
        </Tooltip><br />
        <Tooltip message='Your custom message' placement='bottom'>
          <OutlineButton mb={3}>
            "Bottom"
          </OutlineButton>
        </Tooltip><br />
        <Tooltip message='Your custom message' placement='left'>
          <OutlineButton mb={3}>
            "Left"
          </OutlineButton>
        </Tooltip>
      </Box>
      <Box>
      <Heading.h4>Colour</Heading.h4>
      <Text.p>Choose the colour of your tooltip</Text.p>
        <Tooltip variant='dark' message='Learn more about feature'>
          <Button mb={3}>Dark</Button>
        </Tooltip><br />
        <Tooltip variant='dark' message='Learn more about feature'>
          <OutlineButton>Light</OutlineButton>
        </Tooltip>
      </Box>
      <br />
      <Box>
      <Heading.h4>Explanation content</Heading.h4>
      <Text.p>Use a tooltip to explain an icon</Text.p>
        <Tooltip variant='dark' message='Transaction fees pay for your transaction to be added to the blockchain'>
            <TextButton icon="Help" iconpos="right" color='#666' mx='2'>Transaction fee</TextButton>
        </Tooltip>
        <Tooltip variant='dark' message='Show more options'>
          <TextButton icononly icon='MoreHoriz' color='#666' mx='2' />
        </Tooltip>
        <Tooltip variant='dark' message='Edit'>
          <TextButton icononly icon='Edit' color='#666' mx='2' />
        </Tooltip>
      </Box>
    </Box>
  ))
