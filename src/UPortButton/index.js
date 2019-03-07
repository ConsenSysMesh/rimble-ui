import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { tint, shade } from 'polished'

import Button from '../Button'
import { ReactComponent as UPortLogo } from './icon.svg'

const uPortBrandColor = {
  baseColor: '#5c50ca',
  hoverColor: tint(0.1, '#5c50ca'),
  activeColor: shade(0.1, '#5c50ca'),
  foregroundColor: '#FFFFFF',
}

const ProtoButton = ({className, ...props}) => {
  return (
    <Button className={className} {...props}>
      <UPortLogo />
      {props.children}
    </Button>
  );
}

const StyledButton = styled(ProtoButton)`
  & {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  > span {
    display: flex;
    align-items: center;
  }

  > span > svg:first-child {
    display: block;
    height: ${ props => props.size === 'small' ? '16px' : '24px'};
    width: ${ props => props.size === 'small' ? '16px' : '24px'};
    margin-right: .5rem;
  }
`

const UPortButtonSolid = styled(StyledButton)`
  & {
    color: ${uPortBrandColor.foregroundColor};
    background: ${uPortBrandColor.baseColor};
  }
  &:hover {
    background-color: ${uPortBrandColor.hoverColor};
  }
  &:active {
    background-color: ${uPortBrandColor.activeColor};
  }
  > span > svg:first-child {
    ${uPortBrandColor.foregroundColor}
  }
`

const UPortButtonOutline = styled(StyledButton)`
  & {
    color: #333333;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
  }
  &:hover {
    background-color: #F3F2F2;
  }
  &:active {
    background-color: #E4E4E4;
  }
`

const UPortButton = UPortButtonOutline;

UPortButton.Solid = UPortButtonSolid
UPortButton.Outline = UPortButtonOutline

UPortButton.displayName = 'UPortButton'

export default UPortButton;
