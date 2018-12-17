import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Avatar } from 'rimble-ui'

storiesOf('Avatar', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <div>
      <Avatar />
      <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' />

      <Avatar size='100px' src='https://material-ui.com/static/images/avatar/1.jpg' />
      <Avatar
        size='large'
        src='https://material-ui.com/static/images/avatar/1.jpg'
      />
      <Avatar
        size='medium'
        src='https://material-ui.com/static/images/avatar/1.jpg'
      />
      <Avatar
        size='small'
        src='https://material-ui.com/static/images/avatar/1.jpg'
      />
    </div>
  ))
