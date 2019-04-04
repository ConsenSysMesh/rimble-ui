import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Progress, Box, Text } from 'rimble-ui';

storiesOf('Components/Form/Progress bar', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <CodeBlock>
        <Progress value={0.5} />
      </CodeBlock>
    </Box>
  ));
