import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Select } from 'rimble-ui'

const items = [
  'Wandering Thunder',
  'Black Wildflower',
  'Ancient Paper',
]

storiesOf('Form/Select', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Select items={items} />
  ))
