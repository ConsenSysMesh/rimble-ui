import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const StyledPill = styled(Text)`
  & {
    position: relative;
    overflow: hidden;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.12;
    background: currentColor;
    pointer-events: none;
  }
`;

const Pill = React.forwardRef((props, ref) => (
  <StyledPill ref={ref} {...props} />
));

Pill.defaultProps = {
  color: 'dark-gray',
  bg: '#FFF',
  fontSize: 1,
  fontWeight: 2,
  lineHeight: 'solid',
  height: '2rem',
  px: 3,
  py: 1,
  borderRadius: 3,
  display: 'inline-flex',
  alignItems: 'center',
};

Pill.propTypes = {
  ...Text.propTypes,
};

Pill.displayName = 'Pill';

export default Pill;
