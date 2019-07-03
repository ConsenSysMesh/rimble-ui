# Select documentation

`Select` provides a styled version of the HTML `<select>`.

## Component
<!-- STORY -->

## Usage

```jsx
import React, { Component } from 'react';
import { Select } from 'rimble-ui';

const options = [
  { value: 'ETH', label: 'ETH - Ether'},
  { value: 'BTC', label: 'BTC - Bitcoin'},
  { value: 'GNO', label: 'GNO - Gnosis'},
  { value: 'GNT', label: 'GNT - Golem'},
  { value: 'REP', label: 'REP - Augur'},
];

const MyComponent = () => (
  <Select options={options}  />
);
```

## Props
<!-- PROPS -->
