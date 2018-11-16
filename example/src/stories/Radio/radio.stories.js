import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Radio } from 'rimble-ui'

storiesOf('Form/Radio', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <div>
      <label htmlFor=""><Radio id="blue" name="pill"/>Blue Pill</label>
      <label htmlFor=""><Radio id="red" name="pill" />Red Pill</label>
    </div>
  ))
