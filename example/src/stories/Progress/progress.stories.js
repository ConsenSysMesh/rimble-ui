import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Progress, Box, Text } from 'rimble-ui';

storiesOf('Form/Progress bar', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Progress value={0.5} />
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Progress value={0.5} />'}</code>
        <br />
      </Box>
    </Box>
  ));
