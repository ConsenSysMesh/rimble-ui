import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Text from '../Text';
import theme from '../theme';

const hoverColor = system({
  hoverColor: {
    property: 'color',
    scale: 'colors',
  },
});

const activeColor = system({
  activeColor: {
    property: 'color',
    scale: 'colors',
  },
});

const StyledLink = styled(Text)`
  & {
    text-decoration: none;
    cursor: pointer;
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

const Link = React.forwardRef(({ as, ...props }, ref) => (
  <StyledLink ref={ref} forwardedAs={as} {...props} />
));

Link.defaultProps = {
  as: 'a',
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3,
  theme,
};

Link.propTypes = {
  ...Text.propTypes,
  theme: PropTypes.object,
};

Link.displayName = 'Link';

export default Link;
