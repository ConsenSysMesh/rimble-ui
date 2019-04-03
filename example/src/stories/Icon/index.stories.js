import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import documentation from './documentation.md';

import { Icon, Box, Heading, Text } from 'rimble-ui';

storiesOf('Components/Icon', module)
  .addDecorator(withDocs(documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Icon examples</Heading.h2>
        <Text.p>Different ways to use the Input component.</Text.p>
      </Box>
      <br />
      <Box>
        <Heading.h4>Standard icon</Heading.h4>
        <Icon name="MoneyOff" />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Icon name="MoneyOff" />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <Icon name="MoneyOff" color="primary" />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Icon name="MoneyOff" color="primary" />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom size</Heading.h4>
        <Icon name="MoneyOff" color="tomato" size="80" />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Icon name="MoneyOff" color="tomato" size="80" />'}</code>
      </Box>
    </Box>
  ));
