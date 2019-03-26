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
  Box,
  Heading,
  Field,
  Text,
  Input,
} from 'rimble-ui'

storiesOf('Form/Inputs', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box textAlign={'left'}>
    <Box>
    <Heading.h2>Input examples</Heading.h2>
    <Text>Different ways to use the Input component. <b>Note</b>: these examples use the <a href="form-field-component--field">Field</a> component to render associated labels.</Text>
    </Box>
    <br />

    <Box>
    <Heading.h4>Placeholder</Heading.h4>
    <Text.p>Adds placeholder text to suggest the type of input expected.</Text.p>
    <Field label='Name your wallet'>
      <Input type='text' placeholder='e.g. My hodl wallet' required='true'/>
    </Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
    <br />
    <Box>
    <Heading.h4>Disabled input</Heading.h4>
    <Field label='Name your wallet'>
      <Input type='text' placeholder='e.g. My hodl wallet' required='true' disabled />
    </Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
    <br />
    <Box>
    <Heading.h4>Optional input</Heading.h4>
    <Text.p>Renders (Optional) next to the label.</Text.p>
    <Field label='Name your wallet'>
      <Input type='text' placeholder='e.g. My hodl wallet' />
    </Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
    <br />





    <Box>
    <Heading.h4>Text input</Heading.h4>
    <Text.p>Brings up a standard keyboard.</Text.p>
<Field label='Public address'>
      <Form.Input type='text' mb={2} required='true' placeholder='e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>

<br />
    <Box>
    <Heading.h4>Email input</Heading.h4>
    <Text.p>Gives you an @ on your keyboard.</Text.p>
<Field label='Email'>
      <Form.Input type='email' name='email' mb={2} id='email' required='true' placeholder='you@example.com'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
<br />
<Box>
<Heading.h4>Password input</Heading.h4>
<Text.p>Masks any input.</Text.p>
<Field label='Password'>
<Form.Input required='true' type='password' />
</Field>
</Box>
<Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
  <code>insert code</code>
</Box>
<br />
    <Box>
    <Heading.h4>Number input</Heading.h4>
    <Text.p>Opens the number page of your keyboard. Allows you to easily increase/decrease the value on desktop too.</Text.p>
<Field label='Number'>
    <Form.Input required='true' type='number' placeholder='e.g. 123'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
<br />
    <Box>
    <Heading.h4>Search input</Heading.h4>
        <Text.p>Allows you to quickly remove a search term.</Text.p>
<Field label='Enter a search term'>
    <Form.Input required='true' type='search' placeholder='e.g. Ethereum'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
<br />
    <Box>
    <Heading.h4>Telephone input</Heading.h4>
    <Text.p>Brings up the telephone keyboard.</Text.p>
<Field label='Telephone'>
    <Form.Input type='tel' required='true' placeholder='e.g. +445575242519'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
<br />
    <Box>
    <Heading.h4>URL input</Heading.h4>
    <Text.p>Brings up a url keyboard.</Text.p>
<Field label='URL'>
    <Form.Input type='url' required='true' placeholder='e.g. rimble.consensys.design'/>
</Field>
    </Box>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>insert code</code>
    </Box>
    </Box>
  ))
