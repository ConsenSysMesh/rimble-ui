import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as IconProcessing } from './icon-processing.svg';

const WrappedIconProcessing = props => <IconProcessing {...props} />;

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

const AnimatedIconProcessing = styled(WrappedIconProcessing).attrs({
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
})`
  & {
    display: block;
  }
  > * {
    animation-name: ${flicker};
    animation-duration: ${props => props.seed + 'ms'};
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
  > *:nth-child(4n + 0) {
    animation-duration: ${props => props.seeda + 'ms'};
    animation-delay: ${props => props.seeda + 'ms'};
  }
  > *:nth-child(2n + 0) {
    animation-duration: ${props => props.seedb + 'ms'};
  }
  > *:nth-child(3n + 0) {
    animation-duration: ${props => props.seeda + 'ms'};
    animation-delay: ${props => props.seedb + 'ms'};
  }
`;

export default AnimatedIconProcessing;
