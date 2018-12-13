import React from 'react'
import styled from 'styled-components'
import {
  // core
  space,
  color,
  // layout
  display,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  verticalAlign,
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
  justifyContent,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  // background
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // misc/border
  borders,
  borderColor,
  borderRadius,
  // misc
  boxShadow,
  opacity,
  overflow,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from 'styled-system'

const Box = styled.div`
  & {
    box-sizing: border-box;
  }
  ${'' /* core */}
  ${space}
  ${color}
  ${width}
  ${fontSize}
  ${'' /* layout */}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${'' /* flexbox */}
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
  ${'' /* position */}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${'' /* borders */}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${'' /* typography */}
`

Box.displayName = 'Box'

export default Box
