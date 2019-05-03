import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { MetaMaskButton, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/MetaMaskButton', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>MetaMaskButton examples</Heading.h3>
        <Text>Different ways to use the <code>{'MetaMaskButton'}</code> component in your product.</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <MetaMaskButton>Connect with uPort</MetaMaskButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Outline</Heading.h4>
        <MetaMaskButton.Outline>
          Connect with MetaMask
        </MetaMaskButton.Outline>
      </Box>

      <CodeBlock textOnly>
        {
          '<MetaMaskButton.Outline>Connect with MetaMask</MetaMaskButton.Outline>'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <MetaMaskButton size="small">
          Connect with MetaMask
        </MetaMaskButton>

        <CodeBlock textOnly>
          {
            '<MetaMaskButton size="small">Connect with MetaMask</MetaMaskButton>'
          }
        </CodeBlock>

        <MetaMaskButton.Outline size="small">
          Connect with MetaMask
        </MetaMaskButton.Outline>

        <CodeBlock textOnly>
          {
            '<MetaMaskButton.Outline size="small">Connect with MetaMask</MetaMaskButton.Outline>'
          }
        </CodeBlock>
      </Box>
      <Box>
        <MetaMaskButton size="medium" mb={3} mr={3}>
          Connect with MetaMask
        </MetaMaskButton>
      </Box>

      <CodeBlock textOnly>
        {'<MetaMaskButton size="medium">Connect with MetaMask</MetaMaskButton>'}
      </CodeBlock>

      <MetaMaskButton.Outline size="medium" mb={3}>
        Connect with MetaMask
      </MetaMaskButton.Outline>
      <CodeBlock textOnly>
        {
          '<MetaMaskButton.Outline size="medium">Connect with MetaMask</MetaMaskButton.Outline>'
        }
      </CodeBlock>

      <Box>
        <MetaMaskButton size="large" mb={3} mr={3}>
          Connect with MetaMask
        </MetaMaskButton>
      </Box>

      <CodeBlock textOnly>
        {'<MetaMaskButton size="large">Connect with MetaMask</MetaMaskButton>'}
      </CodeBlock>

      <MetaMaskButton.Outline size="large" mb={3}>
        Connect with MetaMask
      </MetaMaskButton.Outline>

      <CodeBlock textOnly>
        {
          '<MetaMaskButton.Outline size="large">Connect with MetaMask</MetaMaskButton.Outline>'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <MetaMaskButton fullWidth mb={3}>
          Connect with MetaMask
        </MetaMaskButton>
      </Box>

      <CodeBlock textOnly>
        {'<MetaMaskButton fullWidth>Connect with MetaMask</MetaMaskButton>'}
      </CodeBlock>

      <MetaMaskButton.Outline mb={3} fullWidth>
        Connect with MetaMask
      </MetaMaskButton.Outline>

      <CodeBlock textOnly>
        {
          '<MetaMaskButton.Outline fullWidth>Connect with MetaMask</MetaMaskButton.Outline>'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Disabled</Heading.h4>
        <MetaMaskButton disabled mb={3} mr={3}>
          Connect to MetaMask
        </MetaMaskButton>

        <CodeBlock textOnly>
          {'<MetaMaskButton disabled>Connect with MetaMask</MetaMaskButton>'}
        </CodeBlock>
        <MetaMaskButton.Outline disabled mb={3} mr={3}>
          Connect to MetaMask
        </MetaMaskButton.Outline>

        <CodeBlock textOnly>
          {
            '<MetaMaskButton.Outline disabled>Connect with MetaMask</MetaMaskButton.Outline>'
          }
        </CodeBlock>
      </Box>
    </Box>
  ))
);
