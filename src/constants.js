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
