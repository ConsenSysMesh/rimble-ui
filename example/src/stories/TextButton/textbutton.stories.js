import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { TextButton } from 'rimble-ui'

storiesOf('Button/TextButton', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <TextButton>TextButton</TextButton>
  ))
