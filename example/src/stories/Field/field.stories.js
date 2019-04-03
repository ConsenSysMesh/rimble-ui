import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './documentation.md';

import { Input, Field, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/Form/Field', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box ml={3} textAlign={'left'}>
      <Box>
        <Field label="Public address">
          <Input type="text" required="true" />
        </Field>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Field label="Public address"> \
            <Input type="text" required="true" /> \
          </Field>'
          }
        </code>
      </Box>
    </Box>
  ));
