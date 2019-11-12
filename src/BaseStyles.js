import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize, transparentize } from 'polished';
import { TYPOGRAPHY, COMMON } from './constants';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Base = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <GlobalStyle />
      {children}
    </div>
  );
};

const BaseStyles = styled(Base)`
  ${TYPOGRAPHY};
  ${COMMON};
  ::-moz-selection,
  ::selection {
    background: ${props => transparentize(0.7, props.theme.colors.primary)};
  }
`;

BaseStyles.defaultProps = {
  fontSize: '2',
  fontFamily: 'sansSerif',
  color: 'text',
  theme,
};

BaseStyles.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object,
};

export default BaseStyles;
