import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { MetaMaskButton, Box, Heading, Text } from 'rimble-ui'

storiesOf('MetaMaskButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box ml={3} textAlign={'left'}>
    <Box>
      <Heading.h2>MetaMaskButton examples</Heading.h2>
      <Text>Different ways to use the MetaMaskButton component</Text>
      <br />
    </Box>
    <Box>
      <Heading.h4>Default</Heading.h4>
      <MetaMaskButton mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton>Connect with MetaMask</MetaMaskButton>'}</code>
    </Box>
    <br />
    <Box>
      <Heading.h4>Outline</Heading.h4>
      <MetaMaskButton.outline mb={3}>Connect with MetaMask</MetaMaskButton.outline>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton.outline>Connect with MetaMask</MetaMaskButton.outline>'}</code>
    </Box>
    <br />
      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <MetaMaskButton size="small" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
        <MetaMaskButton.outline size="small" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton size="small">Connect with MetaMask</MetaMaskButton>'}</code><br />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton.outline size="small">Connect with MetaMask</MetaMaskButton.outline>'}</code>
      </Box>
      <br />
      <Box>
        <MetaMaskButton size="medium" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
        <MetaMaskButton.outline size="medium" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton size="medium">Connect with MetaMask</MetaMaskButton>'}</code><br />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton.outline size="medium">Connect with MetaMask</MetaMaskButton.outline>'}</code>
      </Box>
      <br />
      <Box>
        <MetaMaskButton size="large" mb={3} mr={3}>Connect with MetaMask</MetaMaskButton>
        <MetaMaskButton.outline size="large" mb={3}>Connect with MetaMask</MetaMaskButton.outline>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton size="large">Connect with MetaMask</MetaMaskButton>'}</code><br />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
          <code>{'<MetaMaskButton.outline size="large">Connect with MetaMask</MetaMaskButton.outline>'}</code>
      </Box>
      <br />
    <Box>
      <Heading.h4>Full-width button</Heading.h4>
      <MetaMaskButton fullWidth mb={3}>Connect with MetaMask</MetaMaskButton>
      <MetaMaskButton.outline  mb={3} fullWidth >Connect with MetaMask</MetaMaskButton.outline>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton fullWidth>Connect with MetaMask</MetaMaskButton>'}</code><br />
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton.outline fullWidth>Connect with MetaMask</MetaMaskButton.outline>'}</code>
    </Box>
    <br />
    <Box>
      <Heading.h4>Disabled</Heading.h4>
      <MetaMaskButton disabled mb={3} mr={3}>Connect to MetaMask</MetaMaskButton>
      <MetaMaskButton.outline disabled mb={3} mr={3}>Connect to MetaMask</MetaMaskButton.outline>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton disabled>Connect with MetaMask</MetaMaskButton>'}</code><br />
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<MetaMaskButton.outline disabled>Connect with MetaMask</MetaMaskButton.outline>'}</code>
    </Box>
    </Box>

  ))
