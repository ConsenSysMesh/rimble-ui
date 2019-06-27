import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Icon, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components', module).add(
  'Icon',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading.h3>Icon examples</Heading.h3>
        <Text.p>Different ways to use the <code>{'Icon'}</code> component in your product.</Text.p>
      </Box>

      <Box>
        <Heading.h4>Standard icon</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" color="primary" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom size</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" color="tomato" size="80" />
        </CodeBlock>
      </Box>
    </Box>
  ))
);
