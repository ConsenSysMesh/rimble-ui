import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { transparentize } from 'polished'

import defaultTheme from '../theme'

const Progress = styled.progress.attrs({
  primarycolor: props => themeGet('colors.primary', '#000')(props)
})`
  & {
    appearance: none;
    display: inline-block;
    overflow: hidden;
    height: 8px;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background-color: ${props => transparentize('0.75', props.primarycolor)};
  }
  &::-webkit-progress-value {
    background-color: ${props => props.primarycolor};
    border-radius: 8px;
  }
`

Progress.defaultProps = {
  theme: defaultTheme
}

Progress.displayName = 'Progress'

export default Progress
