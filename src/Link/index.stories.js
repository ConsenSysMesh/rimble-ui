import React from 'react'

import { storiesOf } from '@storybook/react'

import Link from '../Link'

storiesOf('Link', module)
  .add('default', () => (
    <Link href='#!'>Click me!</Link>
  ))
