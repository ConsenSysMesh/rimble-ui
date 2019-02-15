import React from 'react'
import styled from 'styled-components'
import {
  fontWeight,
  boxShadow,
  opacity,
  themeGet
} from 'styled-system'

import {
  tint,
  shade
} from 'polished'

import defaultTheme from '../theme'
import Box from '../Box'
import Icon from '../Icon'

const fullWidth = (props) => (
  props.fullWidth ? { width: '100%' } : null
)

const size = (props) => {
  switch (props.size) {
    case 'small':
      return `
        font-size: 12px;
        height: 2rem;
        min-width: 2rem;
        padding: 0 1rem;
      `
    case 'medium':
      return `
        font-size: 16px;
        height: 3rem;
        min-width: 3rem;
      `
    case 'large':
      return `
        font-size: 24px;
        height: 4rem;
        min-width: 4rem;
      `
    default:
      return `
        font-size: 1rem;
        min-width: 3rem;
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

const Button = styled(ProtoButton).attrs({
  hovercolor: props => themeGet('colors.primary', 'black')(props)
})`
  & {
    cursor: pointer;
    font-family: inherit;
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
    background-color: ${props => props.hovercolor};
  }
  &:hover {
    background-color: ${props => tint(0.1, props.hovercolor)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: ${props => shade(0.1, props.hovercolor)};
    box-shadow: none;
  }
  &:disabled {
    opacity: ${props => themeGet('opacity.disabled', '0.5')};
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
  position: 'relative',
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
