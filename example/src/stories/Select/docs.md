# Select documentation

`Select` provides a styled version of the HTML `<select>`.

## Component
<!-- STORY -->

## Usage

### with options array

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

### or with children

```jsx
import React, { Component } from 'react';
import { Select } from 'rimble-ui';

const MyComponent = () => (
  <Select name="pets">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </Select>
);
```
## Props
<!-- PROPS -->
