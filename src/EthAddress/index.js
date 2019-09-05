// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import TextOnlyAddress from './TextOnlyAddress';
import ReadOnlyInput from './ReadOnlyInput';

let EthAddress = {};

EthAddress = TextOnlyAddress;
EthAddress.displayName = 'EthAddress Text';

EthAddress.ReadOnly = ReadOnlyInput;
EthAddress.ReadOnly.displayName = 'EthAddress ReadOnly Input';

export default EthAddress;
