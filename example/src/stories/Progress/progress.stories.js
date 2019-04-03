import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './Documentation.md';

import { Progress, Box, Text } from 'rimble-ui';

storiesOf('Components/Form/Progress bar', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Progress value={0.5} />
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Progress value={0.5} />'}</code>
        <br />
      </Box>
    </Box>
  ));
