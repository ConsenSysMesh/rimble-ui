import React from 'react';
import PropTypes from 'prop-types';
import { Icon as RmdIcon } from 'rmdi';
import theme from '../theme';

const Icon = props => <RmdIcon.default {...props} />;

Icon.defaultProps = {
  theme,
  display: 'block',
  size: '24px',
};

Icon.propTypes = {
  /**
   * Sets which icon to display
   */
  name: PropTypes.string.isRequired,
  /**
   * Sets the element display property
   */
  display: PropTypes.string,
  /**
   * Sets the width and height in pixels
   */
  size: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;
