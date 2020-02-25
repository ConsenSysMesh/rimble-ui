import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import FileInput from './FileInput';
import { StyledBox } from '../Box';
import { CheckCircle, Warning } from '@rimble/icons';

const StyledInput = styled(StyledBox).attrs(props => ({
  as: 'input',
}))`
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
      color: ${themeGet('colors.success')};
    }
    &:invalid {
      border-color: ${themeGet('colors.danger')};
    }
    &:invalid ~ svg.icon-invalid {
      visibility: visible;
      color: ${themeGet('colors.danger')};
    }
  }}
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
  return (
    <StyledIconWrapper>
      <StyledInput {...props} ref={ref} />
      <CheckCircle className={'icon-valid'} />
      <Warning className={'icon-invalid'} />
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
  color: 'text',
  bg: 'background',
  fontSize: '1rem',
  lineHeight: 'initial',
  height: '3rem',
  p: 3,
  border: 1,
  borderColor: 'moon-gray',
  borderRadius: 1,
  boxShadow: 1,
};

Input.WithValidationStyle = WithValidationStyle;

WithValidationStyle.defaultProps = defaultProps;
StyledInput.defaultProps = defaultProps;
Input.defaultProps = defaultProps;

Input.propTypes = {
  theme: PropTypes.object,
};

Input.displayName = 'Input';

export { StyledInput };

export default Input;
