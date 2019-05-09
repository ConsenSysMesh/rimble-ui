import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const addressSummary = (address, firstSegLength = 5, lastSegLength = 4) => {
  if (!address) return '';
  return address
    ? address.slice(0, firstSegLength) +
        '...' +
        address.slice(address.length - lastSegLength)
    : '...';
};

class SimpleAddress extends React.PureComponent {
  render() {
    const { address, truncate } = this.props;
    const displayAddress = truncate ? addressSummary(address) : address;

    return <Text>{displayAddress}</Text>;
  }
}

SimpleAddress.propTypes = {
  address: PropTypes.string.isRequired,
  truncate: PropTypes.bool,
};

SimpleAddress.defaultProps = {
  truncate: false,
};

SimpleAddress.displayName = 'SimpleAddress';

export default SimpleAddress;
