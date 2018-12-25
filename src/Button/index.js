import React from 'react'
import styled from 'styled-components'
import {
  fontWeight,
  boxShadow,
  opacity
} from 'styled-system'

import {
  tint,
  shade
} from 'polished'

import Box from '../Box'
import Icon from '../Icon'

import theme from '../theme'

const fullWidth = (props) => (
  props.fullWidth ? { width: '100%' } : null
)

const size = (props) => {
  switch (props.size) {
    case 'small':
      return `
        font-size: 12px;
        height: ${props.theme.fontSizes[5]}px;
        min-width: ${props.theme.fontSizes[5]}px;
        padding: 0 ${props.theme.space[3]}px ;
      `
    case 'medium':
      return `
        font-size: 16px;
        height: ${props.theme.fontSizes[6]}px;
        min-width: ${props.theme.fontSizes[6]}px;
      `
    case 'large':
      return `
        font-size: 24px;
        height: ${props.theme.fontSizes[7]}px;
        min-width: ${props.theme.fontSizes[7]}px;
      `
    default:
      return `
        font-size: 1rem;
        min-width: ${props.theme.fontSizes[6]}px;
      `
  }
}

const ProtoButton = React.forwardRef((props, ref) => (
  <Box as="button" type="button" ref={ref} {...props} >
    { props.icon && !props.iconpos && <Icon name={props.icon} /> }
    { props.icon && props.iconpos === 'left' && <Icon name={props.icon} /> }
    { props.children && <span>{props.children}</span> }
    { props.icon && props.iconpos === 'right' && <Icon name={props.icon} /> }
  </Box>
))

const Button = styled(ProtoButton)`
  & {
    font-family: inherit;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .15s ease;

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
    opacity: ${props => props.theme.opacity.disabled};
    cursor: not-allowed;
  }

  > svg {
    display: block;
  }
  > svg:first-child {
    margin-left: -1rem;
    margin-right: .5rem;
  }
  > svg:last-child {
    margin-left: .5rem;
    margin-right: -1rem;
  }
  > svg:first-child:last-child {
    margin: 0;
  }

  ${fontWeight}
  ${boxShadow}
  ${opacity}

  ${size}
  ${fullWidth}
`

Button.defaultProps = {
  theme: theme,
  color: 'white',
  bg: 'primary',
  height: '48px',
  m: 0,
  px: 4,
  py: 0,
  border: 0,
  borderColor: 'none',
  borderRadius: 1,
  boxShadow: 1,
  fontSize: 'inherit',
  fontWeight: 3
}

Button.displayName = 'Button'

export default Button
