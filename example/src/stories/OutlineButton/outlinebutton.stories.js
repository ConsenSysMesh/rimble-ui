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
    <Box m={3}>
      <Box>
        <Heading.h3>OutlineButton examples</Heading.h3>
        <Text>
          Different ways to use the <code>{'OutlineButton'}</code> component
        </Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <OutlineButton>Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Different sizes</Heading.h4>
        <CodeBlock>
          <OutlineButton size="small">Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <OutlineButton size="medium">Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <CodeBlock>
          <OutlineButton size="large">Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Full-width button</Heading.h4>
        <CodeBlock>
          <OutlineButton fullWidth>Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Disabled button</Heading.h4>
        <CodeBlock>
          <OutlineButton disabled>Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Icon</Heading.h4>
        <CodeBlock>
          <OutlineButton icon="CameraAlt">Scan QR code</OutlineButton>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
