import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  display,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';

import Box from '../Box';

import defaultTheme from '../theme';

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase',
      }
    : null;

export const regular = props =>
  props.regular ? { fontWeight: props.theme.fontWeights[1] } : null;

export const bold = props =>
  props.bold ? { fontWeight: props.theme.fontWeights[3] } : null;

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null);

const Text = styled(Box)`
  ${display}
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
`;

Text.defaultProps = {
  theme: defaultTheme,
  color: 'copyColor',
  fontFamily: 'sansSerif',
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  textAlign: 'left',
};

Text.displayName = 'Text';

Text.span = Text.withComponent('span');
Text.span.defaultProps = Text.defaultProps;

Text.p = Text.withComponent('p');
Text.p.defaultProps = Text.defaultProps;

Text.s = Text.withComponent('s');
Text.s.defaultProps = Text.defaultProps;

export default Text;
