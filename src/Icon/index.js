import React from 'react';
import PropTypes from 'prop-types';
import { Icon as ImportedIcon } from 'rmdi/lib/Icon';

const Icon = props => <ImportedIcon {...props} />;

Icon.defaultProps = {
  display: 'block',
  size: '24px',
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  display: PropTypes.string,
  size: PropTypes.string,
};

Icon.displayName = 'Icon';

export default Icon;
