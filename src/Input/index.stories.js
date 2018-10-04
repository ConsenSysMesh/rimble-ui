import React from 'react'

import { storiesOf } from '@storybook/react'

import Input from '../Input'

storiesOf('Form/Input', module)
  .add('text', () => (
    <Input type='text' />
  )).add('email', () => (
    <Input type='email' name='email' id='email' placeholder='you@example.com'/>
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
