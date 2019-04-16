import React from 'react';
import styled from 'styled-components';

import { themeGet, fontSize, fontFamily, boxShadow } from 'styled-system';

import Box from '../Box';
import Icon from '../Icon';
import Button from '../Button';

import defaultTheme from '../theme';

const StyledInput = styled(Box)`
  & {
    appearance: none;
  }

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${themeGet('colors.primary', '#000')};
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .was-validated & {
    &:valid {
      border-color: #28C081;
    }
    &:valid ~ svg.icon-valid {
      visibility: visible;
    }
    &:invalid {
      border-color: #EC9081;
    }
    &:invalid ~ svg.icon-invalid {
      visibility: visible;
    }
  }

  ${boxShadow}
  ${fontSize}
  ${fontFamily}
`;

const StyledIconWrapper = styled(Box)`
  & {
    position: relative;
    display: flex;
    align-items: center;
  }
  > svg {
    position: absolute;
    right: 1rem;
    visibility: hidden;
  }
`;

const StyledFileInput = styled('input')`
  & {
    opacity: 0;
    height: 0;
    width: 0;
  }
`;

const StyledFileLabel = styled('label')`
  & {
    cursor: pointer;
    display: inline-block;
  }
`;

const StyledFileButton = styled(Button)`
  & {
    pointer-events: none;
  }
`;

const Input = ({ className, ...props }) => {
  if (props.type === 'file') {
    return (
      <div>
        <StyledFileLabel for={'myID'}>
          <StyledFileInput type={'file'} id={'myID'} name={'myID'} />
          <StyledFileButton>Choose file…</StyledFileButton>
        </StyledFileLabel>
      </div>
    );
  }
  return <StyledInput as={'input'} className={className} {...props} />;
};

const WithIconWrapper = ({ className, ...props }) => (
  <StyledIconWrapper className={className} {...props}>
    <Input className={className} {...props} />
    <Icon className={'icon-valid'} name={'CheckCircle'} color={'#28C081'} />
    <Icon className={'icon-invalid'} name={'Warning'} color={'#DC2C10'} />
  </StyledIconWrapper>
);

Input.defaultProps = {
  theme: defaultTheme,
  as: 'input',
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: '3rem',
  px: 3,
  py: 0,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1,
};

Input.displayName = 'Input';

WithIconWrapper.InputOnly = Input;

export default WithIconWrapper;
