import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { PublicAddress } from 'rimble-ui'

storiesOf('PublicAddress', module)
  .addDecorator(withDocs(MyREADME))
  .add('PublicAddress', () => (
    <PublicAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  ))
