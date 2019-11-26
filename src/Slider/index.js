import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledInput } from '../Input';
import theme from '../theme';

const StyledSlider = styled(StyledInput)`
  & {
    appearance: none;
  }
  &:hover {
    box-shadow: none;
  }
  &::-webkit-slider-runnable-track {
    box-sizing: border-box;
    appearance: none;
    border: none;
    border-radius: 4px;
    background: currentColor;
    height: 4px;
    display: flex;
    align-items: center;
  }
  &::-webkit-slider-thumb {
    box-sizing: border-box;
    appearance: none;
    border: 1px solid #ccc;
    background: white;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    cursor: grab;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    &:active {
      cursor: grabbing;
      border-color: currentColor;
    }
  }

  &::-moz-range-track {
    box-sizing: border-box;
    appearance: none;
    border: none;
    border-radius: 4px;
    background: currentColor;
    height: 4px;
    display: flex;
    align-items: center;
  }
  &::-moz-range-thumb {
    box-sizing: border-box;
    appearance: none;
    border: 1px solid #ccc;
    background: white;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    cursor: grab;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    &:active {
      cursor: grabbing;
      border-color: currentColor;
    }
  }
`;

const Slider = React.forwardRef((props, ref) => (
  <StyledSlider ref={ref} {...props} type={'range'} />
));

StyledSlider.defaultProps = {
  color: 'primary',
  bg: 'none',
  height: '2rem',
  minWidth: '200px',
  m: 0,
  p: 0,
  border: 'none',
  boxShadow: 'none',
  theme,
};

Slider.defaultProps = {
  'aria-label': 'range slider',
};

Slider.propTypes = {
  'aria-label': PropTypes.string,
};

Slider.displayName = 'Slider';

export default Slider;
