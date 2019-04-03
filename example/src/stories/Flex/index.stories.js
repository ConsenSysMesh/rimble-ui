import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './documentation.md';

import { Flex, Box } from 'rimble-ui';

storiesOf('Components/Layout/Flex', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Flex>
        <Box p={3} width={1 / 2} color="salmon" bg="black">
          Flex
        </Box>
        <Box p={3} width={1 / 2} color="white" bg="salmon">
          Box
        </Box>
      </Flex>
      <br />

      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Flex>'}</code>
        <br />
        <code>{'<Box'}</code>
        <br />
        <code>{'p={3}'}</code>
        <br />
        <code>{'width={1/2}'}</code>
        <br />
        <code>{'color="salmon"'}</code>
        <br />
        <code>{'bg="black">'}</code>
        <br />
        <code>{'Flex'}</code>
        <br />
        <code>{'</Box>'}</code>
        <br />
        <code>{'<Box'}</code>
        <br />
        <code>{'p={3}'}</code>
        <br />
        <code>{'width={1/2}'}</code>
        <br />
        <code>{'color="white"'}</code>
        <br />
        <code>{'bg="salmon">'}</code>
        <br />
        <code>{'Box'}</code>
        <br />
        <code>{'</Box>'}</code>
        <br />
        <code>{'</Flex>'}</code>
        <br />
      </Box>
    </Box>
  ));
