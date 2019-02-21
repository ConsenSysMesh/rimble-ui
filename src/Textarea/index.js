import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import Input from '../Input'

import defaultTheme from '../theme'

const Textarea = styled(Input)`
  & {
    appearance: none;
  }
`

Textarea.defaultProps = {
  theme: defaultTheme,
  as: 'textarea',
  color: 'copyColor',
  bg: 'white',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: 'auto',
  p: 3,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Textarea.displayName = 'Textarea'

export default Textarea
