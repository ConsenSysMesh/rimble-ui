import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Select, Field } from 'rimble-ui'

const items = [
  'Wallet #1',
  'Wallet #2',
  'Wallet #3',
]

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Select', () => (
  <Field label='Choose your wallet'>
    <Select items={items} required='false'/>
  </Field>
  ))
