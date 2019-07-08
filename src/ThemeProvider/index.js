import React from 'react';
// import { createGlobalStyle } from 'styled-components';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  ThemeProvider as StyledThemeProvider,
  withTheme,
} from 'emotion-theming';
import { normalize, transparentize } from 'polished';
import theme from '../theme';

export const Base = styled.div`
  & {
    font-size: 1em;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.copyColor};
  }
`;

// const StyledGlobal = styled(Global)`
//   ${normalize()}
//   html {
//     box-sizing: border-box;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   ::selection {
//     background: ${props => transparentize(0.7, props.theme.colors.primary)};
//   }
// `;

// const selectionStyle = props => css`
//   background: ${props => transparentize(0.7, props.theme.colors.primary)};
// `;

const globalStyle = css`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background: ${props => transparentize(0.7, props.theme.colors.primary)};
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;
// const ThemedGlobalStyle = withTheme(GlobalStyle)

const ThemeProvider = ({ children, theme, ...props }) => {
  return (
    <StyledThemeProvider theme={theme} {...props}>
      <Base children={children} />
      <GlobalStyle />
    </StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme,
};

export default ThemeProvider;
