import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import Box, { StyledBox } from '../Box';
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

const StyledLink = styled(StyledBox)`
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

const Link = React.forwardRef((props, ref) => (
  <StyledLink as={'a'} ref={ref} {...props} />
));

Link.defaultProps = {
  color: 'primary',
  hoverColor: 'primary-light',
  activeColor: 'primary-dark',
  fontSize: 1,
  fontWeight: 3,
};

Link.propTypes = {
  ...Box.PropTypes,
  theme: PropTypes.object,
};

Link.displayName = 'Link';

export default Link;
