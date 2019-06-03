import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Text from '../Text';

const Pill = styled(Text)`
  & {
    position: relative;
    background: none;
    overflow: hidden;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    opacity: 0.12;
  }
`;

Pill.defaultProps = {
  theme,
  color: 'dark-gray',
  fontFamily: 'sansSerif',
  fontSize: 1,
  fontWeight: 2,
  lineHeight: 'solid',
  height: 2,
  px: 3,
  py: 1,
  borderRadius: 3,
  display: 'inline-flex',
  alignItems: 'center',
};

Pill.displayName = 'Pill';

export default Pill;
