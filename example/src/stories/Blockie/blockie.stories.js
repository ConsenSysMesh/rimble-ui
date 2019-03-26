import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Blockie } from 'rimble-ui'

storiesOf('Blockie', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => <Blockie  opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} /> )
