import React from 'react'
import styled from 'styled-components'

import Text from '../Text'

const Link = styled(Text)`
  &:hover {
    color: #6755F3;
    text-decoration: underline;
  }
  &:active {
    color: #3223A9;
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
