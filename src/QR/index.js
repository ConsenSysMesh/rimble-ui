import React, { Component } from 'react';
import QRCode from 'qrcode.react';

const QR = props => {
  return <QRCode {...props} />;
};

QR.propTypes = {
  /**
   * Sets the value of the QR code
   */
  value: PropTypes.string.isRequired,
};

QR.displayName = 'QR';

export default QR;
