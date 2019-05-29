import React from 'react';
import styled from 'styled-components';
import { style } from 'styled-system';

import defaultTheme from '../theme';
import Text from '../Text';

const hoverColor = style({
  prop: 'hoverColor',
  cssProperty: 'color',
  key: 'colors',
});

const activeColor = style({
  prop: 'activeColor',
  cssProperty: 'color',
  key: 'colors',
});

const StyledLink = styled(Text)`
  & {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    ${hoverColor};
  }

  &:active {
    text-decoration: none;
    ${activeColor};
  }
`;

const Link = ({ className, children, ...props }) => (
  <StyledLink className={className} children={children} {...props} />
);

Link.defaultProps = {
  theme: defaultTheme,
  as: 'a',
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3,
};

Link.displayName = 'Link';

export default Link;
