import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { QR } from 'rimble-ui'

storiesOf('QR Code', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <QR value="http://facebook.github.io/react/" />
  ))
