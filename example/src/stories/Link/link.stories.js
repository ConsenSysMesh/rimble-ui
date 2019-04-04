import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Link, Box } from 'rimble-ui';

storiesOf('Components/Link', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <CodeBlock>
        <Link href="#!" target="_blank" title="This link goes somewhere">
          Click me!
        </Link>
      </CodeBlock>
    </Box>
  ));
