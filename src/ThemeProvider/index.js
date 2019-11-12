import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../theme';

const ThemeProvider = ({ children, theme, ...rest }) => {
  return (
    <StyledThemeProvider theme={theme} {...rest}>
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
  theme,
};

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
