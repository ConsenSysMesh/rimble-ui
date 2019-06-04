import Icon from 'rmdi/lib/Icon';
import PropTypes from 'prop-types';

Icon.propTypes = {
  display: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  display: 'block',
  size: '24px',
};

Icon.displayName = 'Icon';

export default Icon;
