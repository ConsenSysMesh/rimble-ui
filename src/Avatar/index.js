import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Box from '../Box';

import defaultTheme from '../theme';

const size = props => {
  switch (props.size) {
    case 'small':
      return `
        height: 2em;
        width: 2em;
      `;
    case 'medium':
      return `
        height: 3em;
        width: 3em;
      `;
    case 'large':
      return `
        height: 4em;
        width: 4em;
      `;
    default:
      return ``;
  }
};

const Avatar = styled(Box)`
  & {
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    background: center no-repeat;
    background-size: cover;
    background-color: ${props => themeGet('colors.grey', '#000')};
    background-image: url(${props => props.src});
  }

  ${size}
`;

Avatar.defaultProps = {
  theme: defaultTheme,
  ratio: 1,
  size: '2rem',
  alt: 'Avatar',
};

Avatar.displayName = 'Avatar';

export default Avatar;
