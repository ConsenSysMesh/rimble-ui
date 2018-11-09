import React from 'react'

import { storiesOf } from '@storybook/react'

import { Input } from 'rimble-ui'

storiesOf('Form/Input', module)
  .add('text', () => (
    <div>
      <Input type='text' />
      <Input type='text' disabled/>
    </div>
  )).add('email', () => (
    <div>
      <Input type='email' name='email' id='email' placeholder='you@example.com'/>
      <Input type='email' name='email' id='email' placeholder='you@example.com' disabled/>
    </div>
  )).add('number', () => (
    <Input type='number'/>
  )).add('password', () => (
    <Input type='password'/>
  )).add('search', () => (
    <Input type='search'/>
  )).add('tel', () => (
    <Input type='tel'/>
  )).add('url', () => (
    <Input type='url'/>
  ))
