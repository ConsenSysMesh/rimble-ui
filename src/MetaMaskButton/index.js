import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Fox } from './icon.svg';
import Button, { StyledButton } from '../Button/BaseButton';

const MMStyledButton = styled(StyledButton)`
  & {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.15s ease;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  > svg.r-ff-icon:first-of-type {
    height: ${props => (props.size === 'small' ? '1rem' : '1.5rem')};
    width: ${props => (props.size === 'small' ? '1rem' : '1.5rem')};
    margin-right: 0.5rem;
    margin-bottom: -2px;
  }
`;

const StyledButtonSolid = styled(MMStyledButton)`
  & {
    color: #fff;
    background: #000;
  }
  &:hover {
    background-color: #4c4c4c;
  }
  &:active {
    background-color: #999;
  }
`;

const StyledButtonOutline = styled(MMStyledButton)`
  & {
    color: #333;
    background: #fff;
    border: 1px solid #ccc;
  }
  &:hover {
    background-color: #f3f2f2;
  }
  &:active {
    background-color: #e4e4e4;
  }
`;

const ButtonBody = ({ children, size }) => (
  <React.Fragment>
    <Fox className={'r-ff-icon'} size={size} />
    {children}
  </React.Fragment>
);

const MetaMaskButtonSolid = ({ className, children, ...props }) => {
  return (
    <StyledButtonSolid className={className} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonSolid>
  );
};

const MetaMaskButtonOutline = ({ className, children, ...props }) => {
  return (
    <StyledButtonOutline className={className} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonOutline>
  );
};

const defaultProps = {
  ...Button.defaultProps,
  borderRadius: 1,
};

MetaMaskButtonSolid.defaultProps = defaultProps;

MetaMaskButtonOutline.defaultProps = defaultProps;

const MetaMaskButton = MetaMaskButtonSolid;

MetaMaskButton.outline = MetaMaskButtonOutline;

MetaMaskButton.displayName = 'MetaMaskButton';

export default MetaMaskButton;
