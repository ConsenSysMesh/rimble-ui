import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Box } from 'rimble-ui';

storiesOf('Layout/Box', module)
  .addDecorator(withDocs(MyREADME))
<<<<<<< HEAD
  .add('Box', () => (
    <Box p={3} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="salmon">
=======
  .add('Documentation', () => (
<Box mx={3} textAlign={'left'}>
    <Box
      p={5}
      fontSize={4}
      width={[ 1, 1, 1/2 ]}
      color='white'
      bg='salmon'>
>>>>>>> 573d453b8d50b4606384187b1880ffb2730c2a8e
      This is a Box
    </Box><br />
<Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
    <code>{'<Box'}</code><br />
      <code>{'p={5}'}</code><br />
      <code>{'fontSize={4}'}</code><br />
      <code>{'width={[ 1, 1, 1/2 ]}'}</code><br />
      <code>{'color="white"'}</code><br />
      <code>{'bg="salmon">'}</code><br />
      <code>{'This is a Box'}</code><br />
    <code>{'</Box>'}</code>
    </Box>
    </Box>
  ));
