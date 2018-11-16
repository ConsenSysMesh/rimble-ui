import React from 'react'
import PropTypes from 'prop-types'

import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components'

import theme from '../theme'

export const Base = styled.div`
  font-family: ${props => props.theme.fonts.sansSerif};
  font-size: 16px;
  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = ({ ...props }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
}

export default ThemeProvider
