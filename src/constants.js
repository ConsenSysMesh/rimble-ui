import {
  compose,
  color,
  space,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing,
  // layout
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // borders
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  // flexbox
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  // flexitem
  flex,
  justifySelf,
  alignSelf,
  order,
} from 'styled-system';

export const COMMON = compose(
  color,
  space
);

export const TYPOGRAPHY = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing
);

export const LAYOUT = compose(
  display,
  size,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  overflow,
  verticalAlign
);

export const POSITION = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
);

export const BORDERS = compose(
  borders,
  borderColor,
  borderRadius,
  boxShadow
);

export const FLEXBOX = compose(
  // container
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  // item
  flex,
  justifySelf,
  alignSelf,
  order
);
