import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Link } from 'rimble-ui'

storiesOf('Link', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Link href='#!'>Click me!</Link>
  ))
