import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Input, Field, Box, Heading, Text } from 'rimble-ui';

storiesOf('Form/Field', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
<<<<<<< HEAD
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
=======
    <Box mx={3} textAlign={'left'}>
    <Box>
    <Field label='Public address'>
      <Input type='text' required='true'/>
    </Field>
>>>>>>> 573d453b8d50b4606384187b1880ffb2730c2a8e
    </Box>
  ));
