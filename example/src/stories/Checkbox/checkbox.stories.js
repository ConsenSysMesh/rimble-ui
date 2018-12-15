import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Checkbox } from 'rimble-ui'
import { Field } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Checkbox', () => (
    <div>
      <Checkbox label="Checkbox default" my={2} />
      <Checkbox checked label="Checkbox checked" my={2} />
      <Checkbox disabled label="Checkbox disabled" my={2} />
      <Checkbox disabled checked label="Checkbox checked disabled" my={2} />
    </div>
  ))
