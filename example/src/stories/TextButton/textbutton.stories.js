import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { TextButton, Box, Button, Heading, Text } from 'rimble-ui';

storiesOf('Components/Buttons/TextButton', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box>
      <Box>
        <Heading.h2>TextButton examples</Heading.h2>
        <Text>Different ways to use the TextButton component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <TextButton>Transactions</TextButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Disabled</Heading.h4>
        <CodeBlock>
          <TextButton disabled>Transactions</TextButton>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Icon</Heading.h4>
        <CodeBlock>
          <TextButton icon="Help" iconpos="right">
            Transaction fees
          </TextButton>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
