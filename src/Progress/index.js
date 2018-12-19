import React from 'react'
import styled from 'styled-components'

import { transparentize } from 'polished'

import theme from '../theme'

const Progress = styled.progress`
  & {
    display: inline-block;
    appearance: none;
    overflow: hidden;
    border-radius: ${props => props.theme.radii[1]};

    height: 8px;
  }
  &::-webkit-progress-bar {
    background-color: ${props => transparentize('0.75', props.theme.colors.primary)};
  }
  &::-webkit-progress-value {
    background-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.radii[1]};
  }
`

Progress.defaultProps = {
  theme: theme
}

export default Progress
