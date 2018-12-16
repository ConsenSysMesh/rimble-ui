import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import theme from '../theme'

import Box from '../Box'

const size = (props) => {
  switch (props.size) {
    case 'small':
      return `
        height: ${props.theme.space[3]}px;
        width: ${props.theme.space[3]}px;
      `
    case 'medium':
      return `
        height: ${props.theme.space[4]}px;
        width: ${props.theme.space[4]}px;
      `
    case 'large':
      return `
        height: ${props.theme.space[5]}px;
        width: ${props.theme.space[5]}px;
      `
    default:
      return ``
  }
}

const Avatar = styled(Box)`
  & {
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    background: center no-repeat;
    background-size: cover;
    background-color: ${ props => props.theme.colors.grey };
    background-image: url(${props => props.src});
  }

  ${size}
`

Avatar.defaultProps = {
  theme: theme,
  ratio: 1,
  size: '2rem'
}

Avatar.displayName = 'Avatar'

export default Avatar
