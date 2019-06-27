import React from 'react';

import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import { normalize, transparentize } from 'polished';

import theme from '../theme';

export const Base = styled.div`
  & {
    font-size: 1em;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.copyColor};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ::selection {
    background: ${props => transparentize(0.7, props.theme.colors.primary)};
  }
`;

const ThemeProvider = ({ ...props }) => {
  return (
    <StyledThemeProvider theme={theme} {...props}>
      <React.Fragment>
        <GlobalStyle />
        <Base {...props} />
      </React.Fragment>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
