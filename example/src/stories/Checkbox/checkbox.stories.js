import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Checkbox } from 'rimble-ui'
import { Field } from 'rimble-ui'

storiesOf('Form/Checkbox', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <div>
      <Checkbox label="Checkbox default" />
      <Checkbox checked label="Checkbox checked" />
      <Checkbox disabled label="Checkbox disabled" />
      <Checkbox disabled checked label="Checkbox checked disabled" />
    </div>
  ))
