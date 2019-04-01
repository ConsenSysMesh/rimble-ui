import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { QR, Box, Text } from 'rimble-ui';

storiesOf('QR Code', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <QR value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<QRCode value="0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />'}
        </code>
      </Box>
    </Box>
  ));
