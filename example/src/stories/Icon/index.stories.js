import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Icon } from 'rimble-ui'

storiesOf('Icon', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Icon name='Star' />
      <br/>
      <Icon name='Star' color='primary' />
      <br/>
      <Icon name='Star' color='tomato' size='80' />
    </div>
  ))
