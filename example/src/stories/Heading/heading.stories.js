import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Heading } from 'rimble-ui'

storiesOf('Typography/Heading', module)
  .addDecorator(withDocs(MyREADME))
  .add('H1-H6', () => (
    <div>
      <Heading.h1>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h1>
      <Heading.h2>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h2>
      <Heading.h3>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h3>
      <Heading.h4>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h4>
      <Heading.h5>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h5>
      <Heading.h6>
        Quick zephyrs blow, vexing daft Jim.
      </Heading.h6>
    </div>
  ))
