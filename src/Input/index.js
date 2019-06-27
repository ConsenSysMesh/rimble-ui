import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { themeGet, opacity } from 'styled-system';
import {
  COMMON,
  LAYOUT,
  POSITION,
  FLEXBOX,
  BORDERS,
  TYPOGRAPHY,
} from '../constants';

import theme from '../theme';
import Box from '../Box';
import Icon from '../Icon';
import FileInput from './FileInput';

const StyledInput = styled.input`
  & {
    appearance: none;
    box-sizing: border-box;
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
  }}

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${FLEXBOX}
  ${BORDERS}
  ${TYPOGRAPHY}
`;

const StyledIconWrapper = styled.div`
  & {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
  > svg {
    position: absolute;
    right: 1rem;
    visibility: hidden;
  }
`;

const WithValidationStyle = React.forwardRef((props, ref) => {
  return (
    <StyledIconWrapper>
      <StyledInput {...props} ref={ref} />
      <Icon className={'icon-valid'} name={'CheckCircle'} color={'#28C081'} />
      <Icon className={'icon-invalid'} name={'Warning'} color={'#DC2C10'} />
    </StyledIconWrapper>
  );
});

const Input = props => {
  if (props.type === 'file') {
    return <FileInput {...props} />;
  } else {
    return <StyledInput {...props} />;
  }
};

const defaultProps = {
  theme,
  color: 'copyColor',
  bg: 'white',
  fontFamily: 'sansSerif',
  fontSize: '1rem',
  lineHeight: 'solid',
  height: '3rem',
  p: 3,
  border: 1,
  borderColor: 'grey',
  borderRadius: 1,
  boxShadow: 1,
};

// let Input;
//
// Input = StyledInput;
Input.WithValidationStyle = WithValidationStyle;

Input.defaultProps = defaultProps;
WithValidationStyle.defaultProps = defaultProps;
StyledInput.defaultProps = defaultProps;

Input.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
};

Input.displayName = 'Input';

export { StyledInput };

export default Input;
