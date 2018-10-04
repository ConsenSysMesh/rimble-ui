import React from 'react'

import { storiesOf } from '@storybook/react'

import Radio from '../Radio'

storiesOf('Form/Radio', module).add('default', () => (
  <div>
    <label htmlFor=""><Radio id="blue" name="pill"/>Blue Pill</label>
    <label htmlFor=""><Radio id="red" name="pill" />Red Pill</label>
  </div>
))
