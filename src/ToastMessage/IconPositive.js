import React, { Component } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as PositiveIcon } from './icon-positive.svg';

const WrappedIconPositive = props => <PositiveIcon {...props} />;

const IconPositive = styled(WrappedIconPositive)``;

export default IconPositive;
