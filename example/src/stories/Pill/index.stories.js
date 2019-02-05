import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Pill } from 'rimble-ui'

storiesOf('Pill', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Pill>{'TEST'}</Pill>
  ))
