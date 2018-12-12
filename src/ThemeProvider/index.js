import React from 'react'
import PropTypes from 'prop-types'

import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider
} from 'styled-components'

import theme from '../theme'

import { transparentize } from 'polished'

export const Base = styled.div`
  & {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.sansSerif};
  }
  * {
    box-sizing: border-box;
  }
`

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${ props => transparentize(0.7, props.theme.colors.primary) };
  }
`

const ThemeProvider = ({ ...props }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <React.Fragment>
        <Base {...props} />
        <GlobalStyle />
      </React.Fragment>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
}

export default ThemeProvider
