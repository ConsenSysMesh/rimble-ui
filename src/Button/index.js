import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

import theme from '../theme'

const fullWidth = (props) => (props.fullWidth ? { width: '100%' } : null)

const size = (props) => {
  switch (props.size) {
    case 'small':
      return `
        font-size: .5rem;
        padding: .25rem .5rem;
      `
    case 'medium':
      return `
        font-size: 1rem;
        padding: .5rem 1rem;
      `
    case 'large':
      return `
        font-size: 2rem;
        padding: 1rem 2rem;
      `
    default:
      return `
        font-size: 1rem;
        padding: .5rem 1rem;
      `
  }
}

const mode = (props) => {
  switch (props.mode) {
    case 'solid':
      return `
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
      `
    case 'outline':
      return `
        color: ${theme.colors.blue};
        background-color: none;
        border-width: 2px;
      `
    case 'text':
      return `
        color: ${theme.colors.blue};
        background-color: none;
        border-width: 0;
      `
    default:
      return `
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
      `
  }
}

const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;

  border-radius: 8px;

  border-style: solid;
  border-color: inherit;

  ${mode}
  ${size}
  ${fullWidth}

  ${color}

  &:disabled {
    opacity: 0.25;
  }

`

export default Button
