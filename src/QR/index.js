import React, { Component } from 'react';
import QRCode from 'qrcode.react'

const QR = (props) => {
  return <QRCode {...props} />
}

QR.displayName = 'QR';

export default QR;
