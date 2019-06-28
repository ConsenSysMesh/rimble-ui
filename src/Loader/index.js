import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Box from '../Box';

const rotate = keyframes`
  0% {
    transform: rotate(225deg);
  }

  100% {
    transform: rotate(585deg);
  }
`;

const Rotate = styled(Box)`
  & {
    display: block;
    position: relative;
    overflow: hidden;
  }

  > svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
    display: block;
    animation: ${rotate} 1000ms linear infinite;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

const Loader = React.forwardRef((props, ref) => (
  <Rotate ref={ref} {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 7.26613 16.7339 3.42857 12 3.42857C7.26613 3.42857 3.42857 7.26613 3.42857 12C3.42857 16.7339 7.26613 20.5714 12 20.5714ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="currentColor"
        opacity="0.25"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 7.26613 16.7339 3.42857 12 3.42857C7.26613 3.42857 3.42857 7.26613 3.42857 12C3.42857 16.7339 7.26613 20.5714 12 20.5714ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#mask0)">
        <path d="M12 24V15.8824V12H24V24H12Z" fill="currentColor" />
      </g>
    </svg>
  </Rotate>
));

Loader.defaultProps = {
  color: 'primary',
  bg: 'transparent',
  size: '1rem',
};

Loader.propTypes = {
  ...Box.propTypes,
};

Loader.displayName = 'Loader';

export default Loader;
