import React from 'react';
import { storiesOf, } from '@storybook/react'

import { EthAddress } from 'rimble-ui';

storiesOf('Components/', module)
  .add('EthAddress', () => (
    <>
      <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />

      <EthAddress buttonText address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
    </>
  ))
