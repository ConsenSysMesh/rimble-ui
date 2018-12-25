import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Image } from 'rimble-ui'

storiesOf('Image', module)
  .addDecorator(withDocs(MyREADME))
  .add('Default', () => (
    <Image
      width={[ 1, 1, 1/2 ]}
      src='https://source.unsplash.com/random/1280x720'
      borderRadius={8}
    />
  ))
