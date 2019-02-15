import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Slider = styled.input.attrs({
  type: 'range',
  primarycolor: props => themeGet('colors.primary', '#000')(props)
})`
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
    background: ${ props => props.primarycolor };
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
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    &:active {
      cursor: grabbing;
      border-color: ${ props => props.primarycolor }
    }
  }
`

Slider.displayName = 'Slider'

export default Slider
