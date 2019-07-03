import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { opacity } from 'styled-system';
import { COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS } from '../constants';
import theme from '../theme';

const StyledBox = styled.div`
  & {
    box-sizing: border-box;
  }

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${FLEXBOX}
  ${BORDERS}
  ${opacity}
`;

StyledBox.defaultProps = {
  theme,
};

const Box = React.forwardRef((props, ref) => (
  <StyledBox ref={ref} {...props} />
));

Box.propTypes = {
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEXBOX.propTypes,
  ...BORDERS.propTypes,
  theme: PropTypes.object,
};

Box.displayName = 'Box';

export default Box;
