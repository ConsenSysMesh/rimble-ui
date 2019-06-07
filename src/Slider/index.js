import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON } from '../constants';
import theme from '../theme';

const Slider = styled('input').attrs(props => ({
  type: 'range',
}))`
  & {
    appearance: none;
    height: 2rem;
    min-width: 200px;
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
  ${COMMON}
`;

Slider.defaultProps = {
  theme,
  m: 0,
  color: 'primary',
};

Slider.propTypes = {
  ...COMMON.propTypes,
  theme: PropTypes.object,
};

Slider.propTypes = {
  /**
   * Sets theme
   */
  theme: PropTypes.object,
};

Slider.displayName = 'Slider';

export default Slider;
