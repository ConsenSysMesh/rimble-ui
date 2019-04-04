import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Loader, Button, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/Loader', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Loader examples</Heading.h2>
        <Text>Different ways to use the loader component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default loader</Heading.h4>
        <CodeBlock>
          <Loader />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Loader with background</Heading.h4>
        <CodeBlock>
          <Loader color="white" bg="primary" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom size</Heading.h4>
        <CodeBlock>
          <Loader size="40px" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <CodeBlock>
          <Loader size="80px" color="red" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom size and color with background</Heading.h4>
        <CodeBlock>
          <Loader size="80px" color="white" bg="primary" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Custom background</Heading.h4>
        <CodeBlock>
          <Loader color="white" bg="grey" />
        </CodeBlock>
      </Box>

      <Box>
        <Heading.h4>Black loader</Heading.h4>
        <CodeBlock>
          <Loader color="black" />
        </CodeBlock>
      </Box>
    </Box>
  ))
);
