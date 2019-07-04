import React, { Component } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as NegativeIcon } from './icon-negative.svg';

const WrappedIconNegative = props => <NegativeIcon {...props} />;

const IconNegative = styled(WrappedIconNegative)``;

export default IconNegative;
