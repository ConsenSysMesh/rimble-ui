import React from 'react'

import { storiesOf } from '@storybook/react'

import Checkbox from '../Checkbox'

storiesOf('Form/Checkbox', module).add('default', () => (
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
