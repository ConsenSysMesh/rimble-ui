import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QR = React.forwardRef((props, ref) => <QRCode ref={ref} {...props} />);

QR.propTypes = {
  /**
   * Sets the value of the QR code
   */
  value: PropTypes.string.isRequired,
  /**
   * Changes the element that contains the QR code
   */
  renderAs: PropTypes.oneOf(['canvas', 'svg']),
  /**
   * Sets the height and width in pixels
   */
  size: PropTypes.number,
  /**
   * Sets the background color
   */
  bgColor: PropTypes.string,
  /**
   * Sets the foreground color
   */
  fgColor: PropTypes.string,
  /**
   * Sets the amount of error correction
   */
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  /**
   * Adds margin around the QR code
   */
  includeMargin: PropTypes.bool,
};

QR.defaultProps = {
  renderAs: 'svg',
  size: 128,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  level: 'L',
  includeMargin: false,
};

QR.displayName = 'QR';

export default QR;
