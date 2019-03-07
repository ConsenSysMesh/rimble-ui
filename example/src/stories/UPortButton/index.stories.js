import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { UPortButton } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('UPortButton', () => (
    <div>
      <UPortButton>Connect with uPort</UPortButton>
    </div>
  ))
