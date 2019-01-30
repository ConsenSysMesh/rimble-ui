import React from 'react'
import styled from 'styled-components'

import { transparentize } from 'polished'

import theme from '../theme'

const Progress = styled.progress`
  & {
    appearance: none;
    display: inline-block;
    overflow: hidden;
    height: 8px;
    border-radius: ${props => props.theme.radii[1]};
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

Progress.displayName = 'Progress'

export default Progress
