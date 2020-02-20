import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  compose,
  color,
  space,
  layout,
  position,
  flexbox,
  border,
  typography,
  shadow,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import theme from '../theme';

const styleProps = compose(
  color,
  space,
  layout,
  position,
  flexbox,
  border,
  typography,
  shadow
);

const StyledBox = styled('div')`
  box-sizing: border-box;
  ${styleProps}
`;

StyledBox.defaultProps = {
  theme,
};

const Box = React.forwardRef((props, ref) => (
  <StyledBox ref={ref} {...props} />
));

Box.propTypes = {
  ...propTypes.styleProps,
  theme: PropTypes.object,
};

Box.displayName = 'Box';

export { StyledBox };

export default Box;
