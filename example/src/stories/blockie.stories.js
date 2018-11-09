import React from 'react'

import { storiesOf } from '@storybook/react'

import { Blockie } from 'rimble-ui'

storiesOf('Blockie', module)
  .add('Default', () => <Blockie  opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} /> )
