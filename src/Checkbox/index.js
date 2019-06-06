import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import CheckBox from 'rmdi/lib/CheckBox';
import CheckBoxOutlineBlank from 'rmdi/lib/CheckBoxOutlineBlank';
import Box from '../Box';
import Text from '../Text';
import theme from '../theme';

const StyledBox = styled(Box)`
  & {
    display: inline-flex;
    align-items: center;
  }
`;

const StyledWrapper = styled(Box)`
  & {
    position: relative;
    display: inline-block;
  }

  > input {
    position: relative;
    display: block;
    appearance: none;
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

const Checkbox = ({ className, ...props }) => (
  <StyledBox
    as={'label'}
    className={className}
    {...props}
    htmlFor={props.id}
    opacity={props.disabled ? 0.4 : 1}
  >
    <StyledWrapper>
      <input type="checkbox" {...props} />
      <CheckBox name="checked" />
      <CheckBoxOutlineBlank />
    </StyledWrapper>
    <Text fontSize={1} fontWeight={3} lineHeight={1} ml={1} mr={2}>
      {props.label}
    </Text>
  </StyledBox>
);

Checkbox.defaultProps = {
  theme,
  color: 'primary',
};

Checkbox.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
