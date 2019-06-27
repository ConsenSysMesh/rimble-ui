import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from 'styled-system';
import theme from '../theme';
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

const Link = props => <StyledLink {...props} />;

Link.defaultProps = {
  theme,
  forwardedAs: 'a',
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3,
};

Link.propTypes = {
  ...Text.propTypes,
  theme: PropTypes.object,
};

Link.displayName = 'Link';

export default Link;
