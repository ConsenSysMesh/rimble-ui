import React from 'react'

import styled from 'styled-components'
import { tint } from 'polished'

import Button from '../Button'

const TextButton = styled(Button)`
  & {
    box-shadow: none;
  }
  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
`

TextButton.defaultProps = {
  color: 'primary',
  bg: 'transparent',
  border: 'none',
  borderRadius: 'none',
}

TextButton.displayName = 'TextButton'

export default TextButton
