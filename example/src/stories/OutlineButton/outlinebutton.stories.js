import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { OutlineButton } from 'rimble-ui'

storiesOf('Button/OutlineButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <OutlineButton>OutlineButton</OutlineButton>
  ))
