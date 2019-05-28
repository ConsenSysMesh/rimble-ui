import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Pill, Box, Text, Heading } from 'rimble-ui';

Heading.defaultProps = {
  ...Heading.defaultProps,
  py: 3
}

storiesOf('Components/Pill', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <Box>
        <Heading fontSize={5}>Pill examples</Heading>
        <Text.p>Different ways to use the <code>{'Pill'}</code> component in your product.</Text.p>
      </Box>

      <Box>
        <Heading>Default: </Heading>
        <CodeBlock>
          <Pill>{'Pending'}</Pill>
        </CodeBlock>
      </Box>

      <Box>
        <Heading>Custom color: </Heading>
        <CodeBlock>
          <Pill color={'primary'}>{'Pending'}</Pill>
        </CodeBlock>

        <CodeBlock>
          <Pill color={'red'}>{'Failed'}</Pill>
        </CodeBlock>

        <CodeBlock>
          <Pill color={'green'}>
            {'Confirmed'}
          </Pill>
        </CodeBlock>
      </Box>
    </Box>
  ))
);
