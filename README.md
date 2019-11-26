# rimble-ui

> Rimble Design System&#x27;s react component library.

[![NPM](https://img.shields.io/npm/v/rimble-ui.svg)](https://www.npmjs.com/package/rimble-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Travis Build Status](https://travis-ci.com/ConsenSys/rimble-ui.svg?branch=master)](https://travis-ci.com/ConsenSys/rimble-ui)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/rimble)

Rimble is a project from ConsenSys Design, aiming to provide adaptable components and design standards for decentralized applications (dApps). Our goal is simply to make it easier to build dApps with outstanding user experience. If you're interested, we have written a bit more about [our rationale and approach to building Rimble](https://blog.prototypr.io/this-is-rimble-d0f1ad26b8b6).

Rimble is in initial development and should not be considered stable today. We have made the project public in a very early stage of work in order to gather feedback from the community of designers and developers building dApps.

We are actively working on adding new components to Rimble and will be sharing more information on the roadmap very soon.

## Install

```bash
npm install --save rimble-ui styled-components
```

## Usage

```jsx
import React, { Component } from 'react';

import { Button } from 'rimble-ui';

class Example extends Component {
  render() {
    return <Button size={'medium'}>Click me!</Button>;
  }
}
```

## Change log

### 0.11.1

🐛 Bug Fix
- Fixed icon background color on `ToastMessage` component. #381
- fixed display prop not rendering correctly for `Icon` component. #380
- fixed disabled styling for `Slider` component. #414


### 0.11.0

🚀 New Feature
- Added `BaseStyles` component

🐛 Bug Fix
- Updated `Text` component to pass `as` prop correctly.
- Updated `Heading` component to pass `as` prop correctly.
- Updated `Select` component to adjust width.
- Updated `Field` to inherit color.
- Updated `Radio` and `Checkbox` components to inherit text and icon colors correctly.
- Fixed `pre-commit deprecation warning` #372.
- Fixed warnings when building library #376.

💅 Enhancement
- Adjusted `EthAddress` component padding.
- Addeded default font sizes for `h1-h6` elements.
- Styled `input[type="color"]` for better visibility.
- Updated default props for `Input`, `Textarea`, `Card`.
- Removed `copyColor` from `theme.js`.
- Added `text` and `background` colors to `theme.js`.

### 0.10.0

- Fixed Select arrow display bug.
- Added missing props to QR component.
- Added title and aria-label attributes to EthAddress inputs (accessibility).
- Changed default module from `cjs` to `umd`.
- Upgraded to storybook app and updated stories.
- Reorganized component testing app (CRA).

### 0.9.8

- updated vulnerable dependencies.
- fixed onChange event not firing for file inputs.
- added new `EthAddress` component.

### 0.9.7

- fixed onChange events not firing for file inputs.

### 0.9.6

- Fixed default theme in rimble ThemeProvider.

### 0.9.5

- Fixed Select component accepts more options + children.
- Fixed outdated dependencies vulnerability.
- Fixed PublicAddress width property being passed to it's parent Field component.

### 0.9.4

- Added ref forwarding for all components.
- Fixed input validation icon padding.
- Fixed Tooltip positioning.
- Fixed broken copy button on PublicAddress component.

### 0.9.3

- revert to last stable version

### 0.9.2

- Fixed Slider bar in FireFox
- Added PropType definitions for all components

### 0.9.1

- Fixed Tooltip breaking server side rendering

### 0.9.0

- Refactored Box component to add overflow prop
- Refactored Heading component to remove default margins
- Refactored Text component to remove default margins
- Bug fix for anchor elements inside Flash component
- Removed selected props from Pill component

### 0.8.0

- Refactored Button with Text and Outline as compounds of Button
- Refactored MetaMaskButton and UPortButton to use Button as base
- Added more colors to theme for success, warning, danger, info
- Bug fix for ref property on Input component
- Bug fix for ref property on Button component

### 0.7.1

- Removed background color on Image component

  0.7.0

- Flash component
- Custom labels for PublicAddress component
- Bug fixes

### 0.6.0

- Tables
- Bug fixes

### 0.5.0

- Better form validation
- uPort connect button
- Upgraded to Storybook 5
- Bug fixes

### 0.4.0

- Toast Messages and Toast Message provider
- QR code
- Modal
- Pills
- Expanded test coverage

### 0.3.0

- Styling cleanup for lots of components
- Bug fixes

### 0.2.0

- PublicAddress component
- MetaMask buttons and more button variants
- Basic layout components
- Cards
- Loaders

### 0.1.0

- Theming
- Buttons and other simple components
- Blockies

## License

MIT © [ConsenSys](https://github.com/ConsenSys)
