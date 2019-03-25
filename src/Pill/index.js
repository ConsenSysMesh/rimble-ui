import React, { Component } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Text from '../Text';

import defaultTheme from '../theme';

const Pill = styled(Text).attrs(props => ({
  tintlevel: props.selected ? '0.25' : '0.12',
}))`
  & {
    position: relative;
    cursor: pointer;
    border: ${props => (props.selected ? '1px solid' : 'none')};
    border-color: ${props => (props.selected ? props.color : 'none')};
    background: none;
    overflow: hidden;
  }
  &:hover {
    border-color: transparent;
    &::before {
      opacity: 0.2;
    }
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    opacity: ${props => props.tintlevel};
  }
`;

Pill.defaultProps = {
  theme: defaultTheme,
  color: 'dark-gray',
  px: 3,
  py: 1,
  fontSize: 1,
  fontFamily: 'sansSerif',
  height: 2,
  lineHeight: 'solid',
  borderRadius: 3,
  display: 'inline-flex',
  alignItems: 'center',
  selected: false,
};

Pill.displayName = 'Pill';

export default Pill;
