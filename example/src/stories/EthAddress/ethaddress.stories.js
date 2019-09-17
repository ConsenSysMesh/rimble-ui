import React from 'react';
import { storiesOf, } from '@storybook/react'

import { EthAddress, utils } from 'rimble-ui';

storiesOf('Components/EthAddress', module)
  .add('icon labels', () => (
    <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  ))
  .add('text labels', () => (
    <EthAddress textLabels address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  ))
