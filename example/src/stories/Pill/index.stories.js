import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Pill, Box, Text, Heading } from 'rimble-ui';

storiesOf('Components/Pill', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Pill examples</Heading.h2>
        <Text.p>Different ways to use the pill component</Text.p>
      </Box>

      <Box>
        <Heading.h4>Unselected</Heading.h4>
      </Box>
      <Box>
        <CodeBlock>
          <Pill>{'Pending'}</Pill>
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Selected</Heading.h4>
      </Box>
      <CodeBlock>
        <Pill selected={true}>{'Pending'}</Pill>
      </CodeBlock>

      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <CodeBlock>
          <Pill color={'primary'}>{'Pending'}</Pill>
        </CodeBlock>

        <CodeBlock>
          <Pill color={'red'}>{'Failed'}</Pill>
        </CodeBlock>

        <CodeBlock>
          <Pill selected={true} color={'green'}>
            {'Confirmed'}
          </Pill>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
