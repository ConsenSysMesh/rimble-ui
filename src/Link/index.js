import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const Link = styled.a`
  color: ${ props => props.theme.colors.primary }
`

Link.defaultProps = {
  theme: theme
}

export default Link
