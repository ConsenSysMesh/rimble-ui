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
      <Avatar src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />

      <Avatar size='100px' src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg' />
      <Avatar
        size='large'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
      <Avatar
        size='medium'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
      <Avatar
        size='small'
        src='https://miro.medium.com/fit/c/240/240/1*1ByDBR2I219gNx76GLSJgg.jpeg'
      />
    </div>
  ))
