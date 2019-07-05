import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { ReactComponent as IconProcessing } from './icon-processing.svg';

const flicker = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(-1px);
  }
  20% {
    opacity: 0.6;
  }
  40% {
    opacity: 0.9;
    transform: translateY(1px);
  }
  60% {
    opacity: 0.5;
    transform: translateY(2px);
  }
  100% {
    opacity: 0;
    transform: translateY(3px);
  }
`;

const StyledIcon = styled(IconProcessing)`
  & {
    display: block;
  }
  > * {
    animation-name: ${flicker};
    animation-duration: ${props => props.seeds.seed + 'ms'};
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
  > *:nth-of-type(4n + 0) {
    animation-duration: ${props => props.seeds.seeda + 'ms'};
    animation-delay: ${props => props.seeds.seeda + 'ms'};
  }
  > *:nth-of-type(2n + 0) {
    animation-duration: ${props => props.seeds.seedb + 'ms'};
  }
  > *:nth-of-type(3n + 0) {
    animation-duration: ${props => props.seeds.seeda + 'ms'};
    animation-delay: ${props => props.seeds.seedb + 'ms'};
  }
`;

const AnimatedIconProcessing = props => {
  const seeds = {
    seed: Math.floor(1000 + Math.random() * 7000),
    seeda: Math.floor(
      Date.now()
        .toString()
        .substring(2, 6) +
        Math.random() * 9000
    )
      .toString()
      .substring(0, 4),
    seedb: Math.floor(
      Date.now()
        .toString()
        .substring(0, 4) +
        Math.random() * 4500
    )
      .toString()
      .substring(0, 4),
  };

  return <StyledIcon seeds={seeds} {...props} />;
};

export default AnimatedIconProcessing;
