import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Checkbox } from 'rimble-ui'

storiesOf('Form/Checkbox', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <div>
      <label htmlFor="">
        <Checkbox id="blue" name="pill"/>
        Blue Pill
      </label>
      <label htmlFor="">
        <Checkbox id="red" name="pill" />
        Red Pill
      </label>
    </div>
  ))
