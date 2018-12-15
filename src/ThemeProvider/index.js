import React from 'react'
import PropTypes from 'prop-types'

import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider
} from 'styled-components'

import theme from '../theme'

import { normalize, transparentize } from 'polished'

export const Base = styled.div`
  & {
    font-size: 1em;
    font-family: ${props => props.theme.fonts.sansSerif};
  }
`

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ::selection {
    background: ${ props => transparentize(0.7, props.theme.colors.primary) };
  }
`

const ThemeProvider = ({ ...props }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Base {...props} />
      </React.Fragment>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
}

export default ThemeProvider
