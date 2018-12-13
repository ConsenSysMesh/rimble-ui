import React from 'react'

import styled from 'styled-components'

import { tint, shade } from 'polished'

import Icon from 'rmdi/lib/Icon'

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
        min-width: ${theme.fontSizes[5]}px;
      `
    case 'medium':
      return `
        font-size: 16px;
        height: ${theme.fontSizes[6]}px;
        min-width: ${theme.fontSizes[6]}px;
      `
    case 'large':
      return `
        font-size: 24px;
        height: ${theme.fontSizes[7]}px;
        min-width: ${theme.fontSizes[7]}px;
      `
    default:
      return `
        font-size: 16px;
        height: ${theme.fontSizes[6]}px;
        min-width: ${theme.fontSizes[6]}px;
      `
  }
}

const MyButton = React.forwardRef((props, ref) => (
  <button {...props} ref={ref} className={props.className}>
    { props.icon && !props.iconpos && <Icon name={props.icon} /> }
    { props.icon && props.iconpos === 'left' && <Icon name={props.icon} /> }
    { props.children && <span>{props.children}</span> }
    { props.icon && props.iconpos === 'right' && <Icon name={props.icon} /> }
  </button>
))

const Button = styled(MyButton)`
  ${size} ${fullWidth}
  ${space}
  ${color}
  ${bgColor}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${boxShadow}

  & {
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    line-height: 1;
    ${'' /* font: inherit; */}
    ${'' /* color: inherit; */}
    overflow: hidden;

    transition: all .15s ease;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.icononly ? '0' : props.p };
  }

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

  svg {
    display: block;
  }
  svg:first-child {
    margin-left: -1rem;
    margin-right: .5rem;
  }
  svg:last-child {
    margin-left: .5rem;
    margin-right: -1rem;
  }
  svg:first-child:last-child {
    margin: 0;
  }
`

Button.defaultProps = {
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
