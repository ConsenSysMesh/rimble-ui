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

storiesOf('Buttons/OutlineButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box textAlign={'left'}>
    <Box>
      <Heading.h2>OutlineButton examples</Heading.h2>
      <Text>Different ways to use the OutlineButton component</Text>
      <br />
    </Box>
    <Box>
    <Heading.h4>Default</Heading.h4>
    <OutlineButton mb={3}>Scan QR code</OutlineButton>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<OutlineButton>Scan QR code</OutlineButton>'}</code>
    </Box>
    <br />
    <Box>
      <Heading.h4>Different sizes</Heading.h4>
      <OutlineButton size="small" mb={3}>
        Scan QR code
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="small">Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
    <Box>
      <OutlineButton size="medium" mb={3}>
        Scan QR code
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="medium">Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
    <Box>
      <OutlineButton size="large" mb={3}>
        Scan QR code
      </OutlineButton>
    </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton size="large">Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <OutlineButton fullWidth mb={3}>
          Scan QR code
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton fullWidth>Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Disabled button</Heading.h4>
        <OutlineButton disabled mb={3}>
          Scan QR code
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton disabled>Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Icon</Heading.h4>
        <OutlineButton icon="CameraAlt" mb="3">
          Scan QR code
        </OutlineButton>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<OutlineButton icon="CameraAlt">Scan QR code</OutlineButton>'}</code>
      </Box>
      <br />
    </Box>
  ))
