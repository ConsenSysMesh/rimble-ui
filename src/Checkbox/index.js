import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { CheckBox, CheckBoxOutlineBlank } from '@rimble/icons';
import Box from '../Box';
import Text from '../Text';
import theme from '../theme';

const StyledWrapper = styled(Box)`
  & {
    position: relative;
    display: inline-block;
  }

  > input {
    cursor: pointer;
    appearance: none;
    position: relative;
    z-index: 1;
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0;
  }

  > svg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    fill: ${props => themeGet('colors.grey', '#CCC')};
  }

  > svg[name='checked'] {
    display: none;
    z-index: 1;
    fill: ${props => themeGet('colors.primary', '#000')};
  }

  > input:checked ~ svg[name='checked'] {
    display: block;
  }
`;

const StyledLabel = styled(Box)`
  & {
    cursor: pointer;
  }
  &:hover input:not(:disabled) ~ svg[name='unchecked'] {
    fill: currentColor;
  }
`;

const Checkbox = React.forwardRef(
  ({ className, label, name, value, id, ...props }, ref) => (
    <StyledLabel
      forwardedAs={'label'}
      display={'flex'}
      alignItems={'center'}
      className={className}
      {...props}
      htmlFor={id}
      opacity={props.disabled ? 0.4 : 1}
    >
      <StyledWrapper theme={props.theme}>
        <input
          type={'checkbox'}
          name={name}
          value={value}
          id={id}
          ref={ref}
          {...props}
        />
        <CheckBox name={'checked'} />
        <CheckBoxOutlineBlank name={'unchecked'} />
      </StyledWrapper>
      <Text
        color={'text'}
        fontSize={1}
        fontWeight={3}
        lineHeight={1}
        ml={1}
        mr={2}
      >
        {label}
      </Text>
    </StyledLabel>
  )
);

StyledWrapper.defaultProps = {
  theme,
};

Checkbox.defaultProps = {
  color: 'primary',
};

Checkbox.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
  label: PropTypes.string,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
