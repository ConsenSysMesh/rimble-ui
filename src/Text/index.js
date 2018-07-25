import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-family: sans-serif;
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')

export default Text
