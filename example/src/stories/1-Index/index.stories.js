import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { doc, configureReadme } from 'storybook-readme';

import ContributeBanner from '../../components/ContributeBanner';

import {
  Box,
  Heading,
  Text,
  Card,
  Pill,
  Flex,
  Image,
  Link,
  Button,
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
          standard UI components plus some that are more specific to
          decentralized products. Your tech stack and workflow are yours to
          decide. We impose as few constraints as possible.
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
          </Link>{' '}
          – Let users know they can connect with MetaMask
        </Text>
        <Text>
          {' '}
          <Link
            onClick={linkTo('components-blockie', 'documentation')}
            title="Rimble UI Blockie component"
            href="javascript:;"
          >
            Blockie
          </Link>{' '}
          – Render Ethereum public addresses as blockies
        </Text>

        <Text>
          {' '}
          <Link
            onClick={linkTo('components-uportbutton', 'documentation')}
            title="Rimble UI UPort Button component"
            href="javascript:;"
          >
            uPort button
          </Link>{' '}
          – Let users know they can connect with uPort
        </Text>
        <Text>
          {' '}
          <Link
            onClick={linkTo('components-publicaddress', 'documentation')}
            title="Rimble UI Public Address component"
            href="javascript:;"
          >
            Public address output
          </Link>{' '}
          – Show addresses with copy-to-clipboard functionality
        </Text>

        <Text>
          {' '}
          <Link
            onClick={linkTo('components-qr-code', 'documentation')}
            title="Rimble UI QR Code component"
            href="javascript:;"
          >
            QR Code
          </Link>{' '}
          – Render Ethereum public addresses as QR codes
        </Text>
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
          </Link>{' '}
          – Keep users in the loop about their transactions
        </Text>
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
          </Link>{' '}
          – Design transaction state updates that instil confidence in your dApp
        </Text>
      </Box>
      <br />
      <br />
      <Box>
        <ContributeBanner />
      </Box>
      <br />
      <Box>
        <Card>
          <br />
          <Heading>Change log</Heading>

          <Heading.h6>0.9.0</Heading.h6>
          <Text>
            <ul>
              <li>Refactored Box component to add overflow prop</li>
              <li>Refactored Heading component to remove default margins</li>
              <li>Refactored Text component to remove default margins</li>
              <li>Bug fix for anchor elements inside Flash component</li>
              <li>Removed selected props from Pill component</li>
            </ul>
          </Text>

          <Heading.h6>0.8.0</Heading.h6>

          <Text>
            - Refactored Button with Text and Outline as compounds of Button
          </Text>
          <Text>
            - Refactored MetaMaskButton and UPortButton to use Button as base
          </Text>
          <Text>
            - Added more colors to theme for success, warning, danger, info
          </Text>
          <Text>- Bug fix for ref property on Input component</Text>
          <Text>- Bug fix for ref property on Button component</Text>

          <Heading.h6>0.7.1</Heading.h6>

          <Text>- Removed background color on Image component</Text>

          <Heading.h6>0.7.0</Heading.h6>

          <Text>- Flash component</Text>
          <Text>- Custom labels for PublicAddress component</Text>
          <Text>- Bug fixes</Text>

          <Heading.h6>0.6.0</Heading.h6>

          <Text>- Tables</Text>
          <Text>- Bug fixes</Text>

          <Heading.h6>0.5.0</Heading.h6>

          <Text>- Better form validation</Text>
          <Text>- uPort connect button</Text>
          <Text>- Upgraded to Storybook 5</Text>
          <Text>- Bug fixes</Text>

          <Heading.h6>0.4.0</Heading.h6>

          <Text>- Toast Messages and Toast Message provider</Text>
          <Text>- QR code</Text>
          <Text>- Modal</Text>
          <Text>- Pills</Text>
          <Text>- Expanded test coverage</Text>

          <Heading.h6>0.3.0</Heading.h6>

          <Text>- Styling cleanup for lots of components</Text>
          <Text>- Bug fixes</Text>

          <Heading.h6>0.2.0</Heading.h6>

          <Text>- PublicAddress component</Text>
          <Text>- MetaMask buttons and more button variants</Text>
          <Text>- Basic layout components</Text>
          <Text>- Cards</Text>
          <Text>- Loaders</Text>

          <Heading.h6>0.1.0</Heading.h6>

          <Text>- Theming</Text>
          <Text>- Buttons and other simple components</Text>
          <Text>- Blockies</Text>
        </Card>
      </Box>
    </Box>
  ))
  .add('Installation', doc(installing))
  .add('Theming', doc(theme));
