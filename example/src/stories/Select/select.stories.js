import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Select } from 'rimble-ui';

const options = [
  { value: 'ETH', label: 'ETH - Ether'},
  { value: 'BTC', label: 'BTC - Bitcoin'},
  { value: 'GNO', label: 'GNO - Gnosis'},
  { value: 'GNT', label: 'GNT - Golem'},
  { value: 'REP', label: 'REP - Augur'},
];

storiesOf('Components/', module)
  .addDecorator(withDocs(Documentation))
  .add('Select', () => (
    <Select options={options} />
  ))
