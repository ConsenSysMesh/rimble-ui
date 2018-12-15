import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system'

import theme from '../theme'

import Box from '../Box'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
      }
    : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null)

const Text = styled(Box)`
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}

  ${caps}
  ${regular}
  ${bold}
  ${italic}
`


Text.defaultProps = {
  color: 'copyColor',
  fontFamily: 'sansSerif',
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  textAlign: 'left'
}

Text.displayName = 'Text'

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
