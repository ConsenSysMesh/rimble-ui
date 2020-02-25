import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { transparentize } from 'polished';

import theme from '../theme';

const StyledProgress = styled.progress.attrs(props => ({
  primarycolor: themeGet('colors.primary', '#000')(props),
}))`
  & {
    appearance: none;
    display: inline-block;
    overflow: hidden;
    height: 8px;
    border-radius: 8px;
  }
  &::-webkit-progress-bar {
    background-color: ${props => transparentize('0.75', props.primarycolor)};
  }
  &::-webkit-progress-value {
    background-color: ${props => props.primarycolor};
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
