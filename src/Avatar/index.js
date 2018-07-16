import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const Avatar = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  
  ${color};
`

export default () => <Avatar bg='blue' />
