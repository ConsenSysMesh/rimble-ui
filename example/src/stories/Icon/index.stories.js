import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Icon } from 'rimble-ui'

storiesOf('Icon', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => <Icon name='Check' />)
