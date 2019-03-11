import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import {
  Flex,
  Card,
  Image,
  Button,
  Form,
} from 'rimble-ui'

storiesOf('Form/Inputs', module)
  .addDecorator(withDocs(MyREADME))
  .add('Input', () => (
    <div>
      <Form.Input type='text' placeholder='Lorem ipsum dolor sit.'/>
      <Form.Input type='text' placeholder='Lorem ipsum dolor sit.' disabled/>
    </div>
  )).add('email', () => (
    <div>
      <Form.Input type='email' name='email' id='email' placeholder='you@example.com'/>
      <Form.Input type='email' name='email' id='email' placeholder='you@example.com' disabled/>
    </div>
  )).add('number', () => (
    <Form.Input type='number'/>
  )).add('password', () => (
    <Form.Input type='password'/>
  )).add('search', () => (
    <Form.Input type='search'/>
  )).add('tel', () => (
    <Form.Input type='tel'/>
  )).add('url', () => (
    <Form.Input type='url'/>
  ))
