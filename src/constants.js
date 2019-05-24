import {
  // util
  compose,
  // common
  color,
  space,
  // typography
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
