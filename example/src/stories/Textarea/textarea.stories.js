import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Textarea, Box } from 'rimble-ui';

storiesOf('Components/Form/Text area', module).add(
  'Documentation',
  withDocs(Documentation, () => (
    <Box>
      <CodeBlock>
        <Textarea rows={4} defaultValue="Start typing..." />
      </CodeBlock>
    </Box>
  ))
);
