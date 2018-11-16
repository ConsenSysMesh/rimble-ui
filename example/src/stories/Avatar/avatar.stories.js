import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Avatar } from 'rimble-ui'

storiesOf('Avatar', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => <Avatar />)
