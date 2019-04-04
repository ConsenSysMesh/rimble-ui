import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Icon, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/Icon', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Icon examples</Heading.h2>
        <Text.p>Different ways to use the Input component.</Text.p>
      </Box>
      <br />
      <Box>
        <Heading.h4>Standard icon</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" />
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" color="primary" />
        </CodeBlock>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom size</Heading.h4>
        <CodeBlock>
          <Icon name="MoneyOff" color="tomato" size="80" />
        </CodeBlock>
      </Box>
    </Box>
  ));
