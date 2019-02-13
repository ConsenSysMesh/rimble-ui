import React from 'react'
import styled from 'styled-components'
import {
  tint,
  shade
} from 'polished'

import Text from '../Text'

const Link = styled(Text)`
  & {
    text-decoration: none;
  }
  &:hover {
    color: ${props => tint(0.2, props.theme.colors.primary)};
    text-decoration: underline;
  }
  &:active {
    color: ${props => shade(0.2, props.theme.colors.primary)};
    text-decoration: none;
  }
`

Link.defaultProps = {
  as: 'a',
  fontSize: 1,
  fontWeight: 3,
  color: 'primary',
}

Link.displayName = 'Link'

export default Link
