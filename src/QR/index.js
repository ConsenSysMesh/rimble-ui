import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QR = props => {
  return <QRCode {...props} />;
};

QR.propTypes = {
  /**
   * Sets the content of the QR code
   */
  value: PropTypes.string.isRequired,
};

QR.displayName = 'QR';

export default QR;
