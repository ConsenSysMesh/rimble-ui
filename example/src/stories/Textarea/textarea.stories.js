import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Textarea } from 'rimble-ui'

storiesOf('Form/Textarea', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Textarea rows={4} defaultValue='Hello' />
  ))
