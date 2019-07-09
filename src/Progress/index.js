import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { transparentize } from 'polished';

import theme from '../theme';

const StyledProgress = styled.progress`
  & {
    appearance: none;
    display: inline-block;
    overflow: hidden;
    height: 8px;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background-color: ${props =>
      transparentize('0.75', themeGet('colors.primary', '#000')(props))};
  }
  &::-webkit-progress-value {
    background-color: ${props => themeGet('colors.primary', '#000')(props)};
    border-radius: 8px;
  }
`;

const Progress = React.forwardRef((props, ref) => (
  <StyledProgress ref={ref} {...props} />
));

StyledProgress.defaultProps = {
  theme,
};

// Progress.defaultProps = {
//   theme,
// };

Progress.propTypes = {
  theme: PropTypes.object,
};

Progress.displayName = 'Progress';

export default Progress;
