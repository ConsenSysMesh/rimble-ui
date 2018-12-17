# rimble-ui

> Rimble Design System&#x27;s react component library.

[![NPM](https://img.shields.io/npm/v/rimble-ui.svg)](https://www.npmjs.com/package/rimble-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/rimble)

Rimble is a project from Consensys Design, aiming to provide adaptable components and design standards for decentralized applications (dApps). Our goal is simply to to make it easier to build dApps with outstanding user experience. If you're interested, we have written a bit more about [our rationale and approach to building Rimble](https://blog.prototypr.io/this-is-rimble-d0f1ad26b8b6).

Rimble is in initial development and should not be considered stable today. We have made the project public in a very early stage of work in order to gather feedback from the community of designers and developers building dApps.

We are actively working on adding new components to Rimble and will be sharing more information on the roadmap very soon.

## Install

```bash
npm install --save rimble-ui styled-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'rimble-ui'

class Example extends Component {
  render () {
    return (
      <Button size={'medium'}>
        Click me!
      </Button>
    )
  }
}
```

## License

MIT © [ConsenSys](https://github.com/ConsenSys)
