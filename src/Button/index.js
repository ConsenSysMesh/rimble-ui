import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { tint, shade } from 'polished'

import {
  space,
  color,
  bgColor,
  fontWeight ,
  borders,
  borderColor,
  borderRadius,
  boxShadow
} from 'styled-system'

import theme from '../theme'

const fullWidth = (props) => (
  props.fullWidth ? { width: '100%' } : null
)

const size = (props) => {
  switch (props.size) {
    case 'small':
      return `
        font-size: 12px;
        height: ${theme.fontSizes[5]}px;
      `
    case 'medium':
      return `
        font-size: 16px;
        height: ${theme.fontSizes[6]}px;
      `
    case 'large':
      return `
        font-size: 24px;
        height: ${theme.fontSizes[7]}px;
      `
    default:
      return `
        font-size: 16px;
        height: ${theme.fontSizes[6]}px;
      `
  }
}

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;
  font: inherit;
  color: inherit;

  transition: all .15s ease;
  transform-origin: center;

  ${size} ${fullWidth}

  ${space}
  ${color}
  ${bgColor}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${boxShadow}

  &:hover {
    background-color: ${props => tint(0.1, props.theme.colors.primary)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.25;
    pointer-events: none;
    cursor: not-allowed;
  }
`

Button.propTypes = {
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  // ...buttonStyle.propTypes,
}

Button.defaultProps = {
  as: 'button',
  theme: theme,
  fontSize: 'inherit',
  fontWeight: 3,
  m: 0,
  px: 4,
  py: 0,
  color: 'white',
  bg: 'primary',
  border: 'none',
  borderRadius: 1,
  boxShadow: 1
}

Button.displayName = 'Button'

export default Button
