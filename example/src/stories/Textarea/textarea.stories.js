import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Textarea } from 'rimble-ui'

storiesOf('Form/Inputs', module)
  .addDecorator(withDocs(MyREADME))
  .add('Textarea', () => (
    <Textarea rows={4} defaultValue='Hello' />
  ))
