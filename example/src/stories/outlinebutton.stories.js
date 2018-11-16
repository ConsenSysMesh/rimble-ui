import React from 'react'

import { storiesOf } from '@storybook/react'

import { OutlineButton } from 'rimble-ui'

storiesOf('Button/OutlineButton', module)
  .add('default', () => (
    <OutlineButton>OutlineButton</OutlineButton>
  ))
