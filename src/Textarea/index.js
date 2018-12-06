import React from 'react'
import styled from 'styled-components'

import Input from '../Input'

import theme from '../theme'

import { space } from 'styled-system'

const Textarea = styled(Input)`
  appearance: none;
  font-size: 1rem;
  line-height: 1;
  height: auto;
  background: #FFFFFF;

  ${space}
`

Textarea.defaultProps = {
  as: 'textarea',
  theme: theme,
  p: 3,
  borderRadius: 0
}

Textarea.displayName = 'Textarea'

export default Textarea
