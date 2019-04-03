import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './documentation.md';

import { Link, Box } from 'rimble-ui';

storiesOf('Components/Link', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Link href="#!" target="_blank" title="This link goes somewhere">
          Click me!
        </Link>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Link href="#!" target="_blank" title="This link goes somewhere">Click me!</Link>'
          }
        </code>
      </Box>
    </Box>
  ));
