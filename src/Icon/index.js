import Icon from 'rmdi/lib/Icon';
import PropTypes from 'prop-types';

Icon.defaultProps = {
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

export default Icon;
