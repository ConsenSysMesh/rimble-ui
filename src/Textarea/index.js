import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import Input from '../Input'

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
  p: 3,
  borders: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1
}

Textarea.displayName = 'Textarea'

export default Textarea
