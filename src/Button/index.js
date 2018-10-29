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
        height: 24px;
      `
    case 'medium':
      return `
        font-size: 16px;
        height: 48px;
      `
    case 'large':
      return `
        font-size: 24px;
        height: 64px;
      `
    default:
      return `
        font-size: 16px;
        height: 48px;
      `
  }
}

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font: inherit;
  line-height: 1;
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  border-width: 0;
  border-style: solid;

  box-shadow:
    0 4px 6px rgba(50,50,93,.11),
    0 1px 3px rgba(0,0,0,.08)
  ;
  transition: all .15s ease;
  transform-origin: center;

  ${size} ${fullWidth}

  ${space}
  ${color}
  ${bgColor}
  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}

  &:hover {
    background-color: ${props => tint(0.1, props.theme.colors.primary)};
    transform: translateY(-1px);
    box-shadow:
      0 7px 14px rgba(50,50,93,.1),
      0 3px 6px rgba(0,0,0,.08)
    ;
  }
  &:disabled {
    opacity: 0.25;
    pointer-events: none;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${props => shade(0.1, props.theme.colors.primary)};
    box-shadow: none;
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
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 0,
  color: 'white',
  bg: 'primary',
  border: 'none',
  borderRadius: 0,
  theme: theme
}

Button.displayName = 'Button'

export default Button
