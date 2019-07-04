import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Icon as RmdIcon } from 'rmdi';
import theme from '../theme';
import Box from '../Box';

const StyledBox = styled('div')``;

const Icon = React.forwardRef((props, ref) => (
  <StyledBox ref={ref}>
    <RmdIcon.default {...props} />
  </StyledBox>
));

// RmdIcon.default.defaultProps = {
//   theme,
//   color: 'inherit'
// };

StyledBox.defaultProps = {
  theme,
};

Icon.defaultProps = {
  // theme,
  display: 'block',
  size: '24px',
};

Icon.propTypes = {
  /**
   * Sets which icon to display
   */
  name: PropTypes.string.isRequired,
  /**
   * Sets the element display property
   */
  display: PropTypes.string,
  /**
   * Sets the width and height in pixels
   */
  size: PropTypes.string,
  theme: PropTypes.object,
};

Icon.displayName = 'Icon';

export default Icon;
