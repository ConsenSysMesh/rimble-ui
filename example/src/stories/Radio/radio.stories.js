import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Radio } from 'rimble-ui'

storiesOf('Form/Inputs', module)
  .addDecorator(withDocs(MyREADME))
  .add('Radio', () => (
    <div>
      <Radio label="Radio default" my={2} />
      <Radio checked label="Radio checked" my={2} />
      <Radio disabled label="Radio disabled" my={2} />
      <Radio disabled checked label="Radio checked disabled" my={2} />
    </div>
  ))
