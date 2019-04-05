import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { doc, configureReadme } from 'storybook-readme';

import {
  Box,
  Heading,
  Text,
  Card,
  Pill,
  Flex,
  Image,
  Link,
  OutlineButton,
  Button,
  TextButton,
} from 'rimble-ui';

import theme from './theme.md';
import installing from './installing.md';

// Global styles for storybook-readme. Applies to ALL stories
configureReadme({
  StoryPreview: ({ children }) => (
    <div style={{ margin: '1.5em 0' }}>{children}</div>
  ),
});

storiesOf('Getting started', module)
  .add('Welcome', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h1>Welcome to Rimble</Heading.h1>
        <Heading.h3>
          Rimble is a set of adaptable components and design standards to help
          you get your decentralized application (dApps) off the ground, fast.
        </Heading.h3>

        <Text.p>
          Within you'll find documentation and design guidelines for most
          standard UI components plus some that are more specific to decentralized products. Your
          tech stack and workflow are yours to decide. We impose as few
          constraints as possible.
        </Text.p>
      </Box>
      <br />
      <Box>
        <Heading.h3>dApp components </Heading.h3>
        <Text.p>
          Components you'll find useful for blockchain-related actions
        </Text.p>
        <Text>
          {' '}
          <Link
            onClick={linkTo('components-metamaskbutton', 'documentation')}
            title="Rimble UI MetaMask Button component"
            href="javascript:;"
          >
            MetaMask button
          </Link> – Let users know they can connect with MetaMask</Text>
        <Text>
          {' '}
          <Link
            onClick={linkTo('components-blockie', 'documentation')}
            title="Rimble UI Blockie component"
            href="javascript:;"
          >
            Blockie
          </Link> – Render Ethereum public addresses as blockies</Text>

        <Text>
          {' '}
          <Link
          onClick={linkTo('components-uportbutton', 'documentation')}
          title="Rimble UI UPort Button component"
          href="javascript:;"
        >
          uPort button
        </Link> – Let users know they can connect with uPort</Text>
        <Text>
          {' '}
          <Link
            onClick={linkTo('components-publicaddress', 'documentation')}
            title="Rimble UI Public Address component"
            href="javascript:;"
          >
            Public address output
          </Link> – Show addresses with copy-to-clipboard functionality</Text>

        <Text>
          {' '}
          <Link
            onClick={linkTo('components-qr-code', 'documentation')}
            title="Rimble UI QR Code component"
            href="javascript:;"
          >
            QR Code
          </Link> – Render Ethereum public addresses as QR codes</Text>
        <Text>
          {' '}
          <Link
            onClick={linkTo(
              'components-toastmessage',
              'provider-documentation'
            )}
            title="Rimble UI Toast Message Provider component"
            href="javascript:;"
          >
            ToastMessage Provider
          </Link> – Keep users in the loop about their transactions</Text>

      </Box>
      <br />

      <Box>
        <Heading.h3> dApp patterns </Heading.h3>
        <Text.p>Guides to creating smooth experiences in your dApp</Text.p>
        <Text>
{' '}
          <Link
            onClick={linkTo('dapp-patterns', 'transaction-states')}
            title="Ethereum Transaction States"
            href="javascript:;"
          >
            Transaction states
          </Link> – Design transaction state updates that instil confidence in your dApp
        </Text>
      </Box>
      <br /><br />
      <Box>
        <Card color="white" bg="primary">
          <Heading>Contribute to Rimble</Heading>
          <Text.p color="white">
            We're completely open source so feel free to raise any issues or suggest improvements to Rimble.
          </Text.p>
          <Link
            href="https://github.com/ConsenSys/rimble-ui/blob/master/docs/CONTRIBUTIONS.md"
            title="Rimble UI on GitHub"
            target="_blank"
          >
            <OutlineButton>Contribute</OutlineButton>
          </Link>
        </Card>
      </Box>
      <br />
      <Box>
        <Card>
          <Pill mb={3} color={'primary'}>
            {'NEW'}
          </Pill>
          <br />
          <Heading>Latest changes</Heading>
          <Heading.h5>Sprint 16</Heading.h5>
          <Text>
            • Documentation refresh – new design guidelines added and layout
            updates
          </Text>
          <Text>• Table component added</Text>
        </Card>
      </Box>
    </Box>
  ))
  .add('Installation', doc(installing))
  .add('Theming', doc(theme));
