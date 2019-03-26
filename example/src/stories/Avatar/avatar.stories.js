import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Avatar, Box, Heading, Text } from 'rimble-ui'

storiesOf('Avatar', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <Box textAlign={'left'}>
      <Box>
        <Heading.h2>Avatar examples</Heading.h2>
        <Text>Different ways to use the Avatar component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Standard avatar</Heading.h4>
        <Avatar mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Standard with image</Heading.h4>
        <Avatar mb={3} src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar src= imagelink />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom size</Heading.h4>
      <Avatar mb={3} size='100px' src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar size= 100px src= https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Large avatar</Heading.h4>
      <Avatar
        mb={3}
        size='large'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar size= large src= https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Medium avatar</Heading.h4>
      <Avatar
        mb={3}
        size='medium'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar size= medium src= https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg />'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>Small avatar</Heading.h4>
      <Avatar
        mb={3}
        size='small'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar size= small src= https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg />'}</code>
      </Box>
      <br />
    </Box>
  ))
