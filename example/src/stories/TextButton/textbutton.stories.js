import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { TextButton, Box, Button, Heading, Text, } from 'rimble-ui'

storiesOf('Components/Buttons/TextButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
      <Box mx={3} textAlign={'left'}>
    <Box>
      <Heading.h2>TextButton examples</Heading.h2>
      <Text>Different ways to use the TextButton component</Text>
      <br />
    </Box>
    <Box>
      <Heading.h4>Default</Heading.h4>
      <TextButton>Transactions</TextButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<TextButton>Transactions</TextButton>'}</code>
    </Box>
    <br  />
    <Box>
      <Heading.h4>Disabled</Heading.h4>
      <TextButton disabled>Transactions</TextButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<TextButton disabled>Transactions</TextButton>'}</code>
    </Box>
    <br />
    <Box>
    <Heading.h4>Icon</Heading.h4>
    <TextButton icon="Help" iconpos="right">Transaction fees</TextButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<TextButton icon="Help" iconpos="right">Transaction fees</TextButton>'}</code>
    </Box>
    </Box>
  ))
