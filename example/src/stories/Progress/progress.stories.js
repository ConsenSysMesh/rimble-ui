import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Progress, Box, Text } from 'rimble-ui';

storiesOf('Components/Form/Progress bar', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box mx={3}>
      <CodeBlock>
        <Progress value={0.5} />
      </CodeBlock>
    </Box>
  ))
);
