import React from 'react';
import styled from 'styled-components';
import { tint, shade } from 'polished';
import { themeGet } from 'styled-system';

import defaultTheme from '../theme';
import Text from '../Text';

const StyledLink = styled(Text).attrs(props => ({
  primarycolor: themeGet('colors.primary', 'black')(props),
}))`
  & {
    position: relative;
    text-decoration: none;
  }
  &:hover {
    color: ${props => tint(0.2, props.primarycolor)};
    text-decoration: underline;
  }
  &:active {
    color: ${props => shade(0.2, props.primarycolor)};
    text-decoration: none;
  }
`;

const Link = ({ className, children, ...props }) => (
  <StyledLink className={className} {...props}>
    {children}
  </StyledLink>
);

Link.defaultProps = {
  theme: defaultTheme,
  as: 'a',
  color: 'primary',
  fontFamily: 'sansSerif',
  fontSize: 1,
  fontWeight: 3,
};

Link.displayName = 'Link';

export default Link;
