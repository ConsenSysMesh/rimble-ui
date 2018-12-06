import React from 'react'

import styled from 'styled-components'
import { tint } from 'polished'

import Button from '../Button'

import theme from '../theme'

const OutlineButton = styled(Button)`
  & {
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
  }
  &:hover {
    // background-color: ${props => tint(0.9, props.theme.colors.primary)};

    color: #7165D8;
    border-color: #7165D8;
    background-color: #FFF;
  }
  &:active {
    color: #332A80;
    border-color: #332A80;
    background-color: #EDECFA;
  }
`

OutlineButton.defaultProps = {
  theme: theme,
  fontWeight: 3,
  color: 'primary',
  bg: 'white',
  border: 1,
  px: 4,
  py: 0,
  borderRadius: 1,
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
