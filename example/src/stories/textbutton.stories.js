import React from 'react'

import { storiesOf } from '@storybook/react'

import { TextButton } from 'rimble-ui'

storiesOf('Button/TextButton', module)
  .add('default', () => (
    <TextButton>TextButton</TextButton>
  ))
