import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withDocs, } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import { Heading, Box, EthAddress, } from 'rimble-ui';

storiesOf('Components/', module)
  .add('EthAddress', () => (
    <>

      <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />

      <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} buttonText />

      <EthAddress.Text address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />

      <EthAddress.Text truncate address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
    </>
  ))
