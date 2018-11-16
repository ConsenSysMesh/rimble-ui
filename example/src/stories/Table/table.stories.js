import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Table } from 'rimble-ui'

storiesOf('Table', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Table />
  ))
