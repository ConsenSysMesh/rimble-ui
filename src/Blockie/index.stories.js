import { storiesOf } from '@storybook/react'

import React from 'react'
import Blockie from '../Blockie'

storiesOf('Blockie', module)
  .add('Default', () => <Blockie  opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} /> )
