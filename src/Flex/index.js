import React from 'react'
import styled from 'styled-components'

import Box from '../Box'

import {
  // flexbox
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  order,
  alignSelf,
  alignItems,
  alignContent,
  justifySelf,
  justifyItems,
  justifyContent
} from 'styled-system'

const Flex = styled(Box)`
  & {
    display: flex;
  }
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${order}
  ${alignSelf}
  ${alignItems}
  ${alignContent}
  ${justifySelf}
  ${justifyItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

export default Flex
