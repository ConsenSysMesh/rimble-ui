import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const Slider = styled.input.attrs({ type: 'range' })`
  & {
    appearance: none;
    margin: 0;
    padding: 0;
    height: 2rem;
    min-width: 200px;
  }
  &::-webkit-slider-runnable-track {
    box-sizing: border-box;
    appearance: none;
    border: none;
    border-radius: 4px;
    background: ${ props => props.theme.colors.primary };
    height: 4px;
    display: flex;
    align-items: center;
  }
  &::-webkit-slider-thumb {
    box-sizing: border-box;
    appearance: none;
    border: 1px solid #ccc;
    background: white;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    cursor: grab;

    &:hover {
      box-shadow: ${ props => props.theme.shadows[0] };
    }
    &:active {
      cursor: grabbing;
      border-color: ${ props => props.theme.colors.primary }
    }
  }
`

Slider.defaultProps = {
  theme: theme
}

export default Slider
