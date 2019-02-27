import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Field } from 'rimble-ui'
import { Input } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Field', () => (
    <Field label='label'>
      <Input type='text' />
    </Field>
  ))
