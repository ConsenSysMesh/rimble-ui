import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { doc } from 'storybook-readme';

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

import theming from './theming.md';
import install from './install.md';

storiesOf('Getting started', module)
  .add('Welcome', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h1>Welcome to Rimble</Heading.h1>
        <Heading.h3>
          Rimble is a set of adaptable components and design standards to help
          you get your decentralized application off the ground, fast.
        </Heading.h3>

        <Text.p>
          Within you'll find documentation and design guidelines for most
          standard UI components plus some you'll need in a Web 3.0 world. Your
          tech stack and workflow are yours to decide. We impose as few
          constraints as possible.
        </Text.p>
      </Box>
      <br />
      <Box>
        <Heading.h3> dApp components </Heading.h3>
        <Text.p>
          Components you'll find useful for blockchain-related actions
        </Text.p>
        <Text>
          •{' '}
          <Link
            onClick={linkTo('metamaskbutton', 'documentation')}
            title="Rimble UI MetaMask Button component"
            href="javascript:;"
          >
            MetaMask Button
          </Link>
        </Text>
        <Text />•{' '}
        <Link
          onClick={linkTo('uportbutton', 'documentation')}
          title="Rimble UI UPort Button component"
          href="javascript:;"
        >
          UPortButton
        </Link>
        <Text>
          •{' '}
          <Link
            onClick={linkTo('publicaddress', 'documentation')}
            title="Rimble UI Public Address component"
            href="javascript:;"
          >
            Public Address
          </Link>
        </Text>
        <Text>
          •{' '}
          <Link
            onClick={linkTo('qr-code', 'documentation')}
            title="Rimble UI QR Code component"
            href="javascript:;"
          >
            QR Code
          </Link>
        </Text>
        <Text>
          •{' '}
          <Link
            onClick={linkTo('toastmessage', 'provider-documentation')}
            title="Rimble UI Toast Message Provider component"
            href="javascript:;"
          >
            ToastMessage Provider
          </Link>
        </Text>
      </Box>
      <br />

      <Box>
        <Heading.h3> dApp patterns </Heading.h3>
        <Text.p>Guides to creating smooth experiences in your dApp</Text.p>
        <Text>
          •{' '}
          <Link
            onClick={linkTo('dapp-patterns', 'transaction-states')}
            title="Ethereum Transaction States"
            href="javascript:;"
          >
            Transaction states
          </Link>
        </Text>
      </Box>
      <br />
      <Box>
        <Card color="white" bg="primary">
          <Heading>Contribute to Rimble</Heading>
          <Text.p color="white">
            Rimble is completely open source. Create a new issue for feature and
            component requests or to report a bug.
          </Text.p>
          <Link
            href="https://github.com/ConsenSys/rimble-ui"
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
  .add('Installation', doc(install))
  .add('Theming', doc(theming));
