import React from 'react'
import styled from 'styled-components'

import { injectGlobal } from 'styled-components';

injectGlobal`
  :root {
    font-family: "Inter UI";
    font-size: 16px;
  }
`

import {
  fontSize,
  space,
  color,
  responsiveStyle
} from 'styled-system'



const Text = styled.div`
  ${fontSize} ${space} ${color}
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
