import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withDocs, } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Heading, Box, EthAddress, Text, Tooltip } from 'rimble-ui';

storiesOf('Components/EthAddress', module)
  .add('EthAddress.ReadOnly', () => (
    <>

      <EthAddress.ReadOnly
        my={3}
        address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
      />

      <EthAddress.ReadOnly
        my={3}
        address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
        buttonText
      />

    </>
  ))
  .add('EthAddress', () => (
    <>
      <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />

      <EthAddress truncate address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
    </>
  ))
