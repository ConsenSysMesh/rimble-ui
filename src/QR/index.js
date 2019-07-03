import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QR = React.forwardRef((props, ref) => <QRCode ref={ref} {...props} />);

QR.propTypes = {
  /**
   * Sets the value of the QR code
   */
  value: PropTypes.string.isRequired,
};

QR.displayName = 'QR';

export default QR;
