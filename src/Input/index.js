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
import FileInput from './FileInput';
import IconCheckCircle from 'rmdi/lib/CheckCircle';
import IconWarning from 'rmdi/lib/Warning';

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

  &[type="color"] {
    min-width: 3rem;
    padding: 0;
    &::-webkit-color-swatch-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    &::-webkit-color-swatch {
      flex: 0 0 auto;
      height: 2rem;
      width: 2rem;
      border: none;
      border-radius: 100%;
    }
    &::-moz-color-swatch {
      height: 2rem;
      width: 2rem;
      border: none;
      border-radius: 100%;
    }
  }

  .was-validated & {
    &:valid {
      border-color: ${themeGet('colors.success')};
    }
    &:valid ~ svg.icon-valid {
      visibility: visible;
    }
    &:invalid {
      border-color: ${themeGet('colors.danger')};
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
  > ${StyledInput} {
    padding-right: 3rem;
    text-overflow: ellipsis;
    white-space: no-wrap;
  }
  > svg {
    position: absolute;
    right: 1rem;
    visibility: hidden;
  }
`;

const WithValidationStyle = React.forwardRef((props, ref) => {
  const colorSuccess = themeGet('colors.success')(props);
  const colorError = themeGet('colors.danger')(props);

  return (
    <StyledIconWrapper>
      <StyledInput {...props} ref={ref} />
      <IconCheckCircle className={'icon-valid'} color={colorSuccess} />
      <IconWarning className={'icon-invalid'} color={colorError} />
    </StyledIconWrapper>
  );
});

const Input = React.forwardRef((props, ref) => {
  if (props.type === 'file') {
    return <FileInput {...props} ref={ref} />;
  } else {
    return <StyledInput {...props} ref={ref} />;
  }
});

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
