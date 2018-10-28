import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const Avatar = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  background-color: ${ props => props.theme.colors.primary };
`

Avatar.defaultProps = {
  theme: theme
}

Avatar.displayName = 'Avatar'

export default Avatar
