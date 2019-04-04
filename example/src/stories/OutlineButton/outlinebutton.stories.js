import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Button,
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
  Card,
} from 'rimble-ui';

storiesOf('Components/Buttons/OutlineButton', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box>
      <Box>
        <Heading.h2>OutlineButton examples</Heading.h2>
        <Text>Different ways to use the OutlineButton component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <OutlineButton mb={3}>Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <CodeBlock>
          <OutlineButton size="small" mb={3}>
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <OutlineButton size="medium" mb={3}>
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <OutlineButton size="large" mb={3}>
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <CodeBlock>
          <OutlineButton fullWidth mb={3}>
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Disabled button</Heading.h4>
        <CodeBlock>
          <OutlineButton disabled mb={3}>
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Icon</Heading.h4>
        <CodeBlock>
          <OutlineButton icon="CameraAlt" mb="3">
            Scan QR code
          </OutlineButton>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
