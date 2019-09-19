import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Box } from 'rimble-ui';

storiesOf('Components/Layout/', module).add(
  'Box',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <CodeBlock>
        <Box p={3} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="salmon">
          This is a Box
        </Box>
      </CodeBlock>
    </Box>
  ))
);
