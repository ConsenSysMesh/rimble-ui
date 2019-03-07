import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { tint, shade } from 'polished'

import Button from '../Button'
import { ReactComponent as UPortLogo } from './icon.svg'

const uPortBrandColor = '#5c50ca'

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
    display: inherit;
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
    color: white;
    background: ${uPortBrandColor};
  }
  &:hover {
    background-color: ${tint(0.1, uPortBrandColor)};
  }
  &:active {
    background-color: ${shade(0.1, uPortBrandColor)};
  }

  > span > svg:first-child {
    fill: white;
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
