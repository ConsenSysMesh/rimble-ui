import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Button,
OutlineButton,
TextButton,
MetaMaskButton,
Icon,
Loader,
Text,
Heading,
Box,
Flex,
Modal,
Card, } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('OutlineButton', () => (
    <Box textAlign={'left'}>
    <Box>
      <Heading.h2>OutlineButton examples</Heading.h2>
      <Text>Different ways to use the OutlineButton component</Text>
      <br />
    </Box>
    <Box>
    <Heading.h4>Default</Heading.h4>
    <OutlineButton mb={3}>OutlineButton</OutlineButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<OutlineButton>OutlineButton</OutlineButton>'}</code>
    </Box>
    <br />
    <Box>
      <Heading.h4>Different sizes</Heading.h4>
      <OutlineButton size="small" mb={3}>
        Connect wallet
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="small">Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
    <Box>
      <OutlineButton size="medium" mb={3}>
        Connect wallet
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="medium">Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
    <Box>
      <OutlineButton size="large" mb={3}>
        Connect wallet
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="large">Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <OutlineButton fullWidth mb={3}>
          Connect wallet
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton fullWidth>Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Disabled button</Heading.h4>
        <OutlineButton disabled mb={3}>
          Connect wallet
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton disabled>Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Icon</Heading.h4>
        <OutlineButton icon="Send" mb="3">
          Send Ether
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton icon="Send">Connect wallet</OutlineButton>'}</code>
      </Box>
      <br />
    </Box>
  ))
