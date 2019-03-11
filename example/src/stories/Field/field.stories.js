import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Input,
  Field
} from 'rimble-ui'

storiesOf('Form/Field Component', module)
  .addDecorator(withDocs(MyREADME))
  .add('Field', () => (
    <Field label='label'>
      <Input type='text' />
    </Field>
  ))
