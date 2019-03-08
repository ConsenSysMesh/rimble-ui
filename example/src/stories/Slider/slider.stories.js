import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Slider } from 'rimble-ui'

storiesOf('Form/Inputs', module)
  .addDecorator(withDocs(MyREADME))
  .add('Slider', () => <Slider />)
