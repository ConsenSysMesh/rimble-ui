import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { QR } from 'rimble-ui'

storiesOf('QR Code', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <QR value="http://facebook.github.io/react/" />
  ))
