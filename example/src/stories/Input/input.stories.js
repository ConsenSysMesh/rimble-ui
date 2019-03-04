import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Input } from 'rimble-ui'

import { Button } from 'rimble-ui'
import { Field } from 'rimble-ui'
import { Checkbox } from 'rimble-ui'
import { Image } from 'rimble-ui'
import { Flex } from 'rimble-ui'

import { Card } from 'rimble-ui'

storiesOf('Form/Input', module)
  .addDecorator(withDocs(MyREADME))
  .add('Input', () => (
    <div>
      <Input type='text' placeholder='Lorem ipsum dolor sit.'/>
      <Input type='text' placeholder='Lorem ipsum dolor sit.' disabled/>
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

storiesOf('Form/Validation', module)
.add('Form', () => (
  <div>
    <form onSubmit={(event) => event.preventDefault()}>
      <Field for="choose" label='Would you prefer a banana or cherry?'>
        <Input id="choose" name="i_like" required pattern="banana|cherry" />
      </Field>
      <Field label='Would you prefer a red or blue?'>
        <Input id="choose" name="i_like" />
      </Field>

      <Flex alignItems={'center'} mb={3}>
        <Checkbox label="Hey, 'check' me out " my={2} />
        <Image
          size='1rem'
          src='http://orig14.deviantart.net/c6aa/f/2014/303/5/d/awesome_face_by_zorogleb-d84ne3x.jpg'
        />
      </Flex>

      <Button type="submit">Submit</Button>

      {/* <label for="choose">
        Would you prefer a banana or cherry?
      </label>

      <Input id="choose" name="i_like" required />
      <Button>Submit</Button> */}
    </form>
  </div>
))
.add('Form with Card', () => (
  <div>
    <Card>
      <form onSubmit={(event) => event.preventDefault()}>
        <Field label='Email' width={1}>
          <Input type="email" required width={1}/>
        </Field>
        <Field label='Password' width={1}>
          <Input type="password" required width={1}/>
        </Field>
        <Checkbox label="Remember me?" mb={3} />
        <Button type="submit" width={1}>Sign Up</Button>
      </form>
    </Card>
  </div>
))
