import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

storiesOf('Getting Started', module)
  .addDecorator(withDocs(MyREADME))
  .add(
    'Theming',
    () => (false),
    { info: { disable: true } }
  )
