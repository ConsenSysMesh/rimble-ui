import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
  }

  ${size}
`;

Avatar.defaultProps = {
  theme,
  size: '2rem',
  bg: 'grey',
  alt: 'Avatar',
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  theme: PropTypes.object,
  ...Box.propTypes,
};

Avatar.displayName = 'Avatar';

export default Avatar;
