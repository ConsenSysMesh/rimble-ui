import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { UPortButton, Flex, Box, Heading, Text } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('UPortButton', () => (
    <Box textAlign={'left'}>
    <Box>
      <Heading.h2>UPortButton examples</Heading.h2>
      <Text>Different ways to use the UPortButton component</Text>
      <br />
    </Box>
    <Box>
    <Heading.h4>Default</Heading.h4>
        <UPortButton>Connect with uPort</UPortButton><br />
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<UPortButton>Connect with uPort</UPortButton>'}</code>
    </Box><br />
    <Box>
    <Heading.h4>Solid background</Heading.h4>
        <UPortButton.Solid>Connect with uPort</UPortButton.Solid><br />
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<UPortButton.Solid>Connect with uPort</UPortButton.Solid>'}</code>
    </Box>
    </Box>
  ));
