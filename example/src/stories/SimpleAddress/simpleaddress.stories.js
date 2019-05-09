import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withDocs, } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';

import { Heading, Box, SimpleAddress, } from 'rimble-ui';

storiesOf('Components/SimpleAddress', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box>
      <Box mx={3}>
        <Heading.h4>Default</Heading.h4>
        <CodeBlock>
          <SimpleAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
        </CodeBlock>
      </Box>

      <Box mx={3}>
        <Heading.h4>Truncation</Heading.h4>
        <CodeBlock>
          <SimpleAddress truncate address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
        </CodeBlock>
      </Box>
    </Box>
  ))
);
