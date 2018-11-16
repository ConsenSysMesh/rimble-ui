import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Slider } from 'rimble-ui'

storiesOf('Form/Slider', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => <Slider />)
