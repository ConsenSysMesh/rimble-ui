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

class MyCustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {validated: false};
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ validated: true });
  }

  handleValidation = (e) => {
    e.target.parentNode.classList.add('was-validated')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field label='Email' width={1}>
          <Form.Input type="email" required width={1} onChange={this.handleValidation} />
        </Form.Field>
        <Form.Field validated={this.state.validated} label='Password' width={1}>
          <Form.Input type="password" required width={1} onChange={this.handleValidation}/>
        </Form.Field>
        <Form.Check label="Remember me?" mb={3} onChange={this.handleValidation} />
        <Button type="submit" width={1}>Sign Up</Button>
      </Form>
    );
  }

}

storiesOf('Form/Input', module)
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

storiesOf('Form/Validation', module)
.add('Form', () => (
  <div>
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Field for="choose" label='Would you prefer a banana or cherry?'>
        <Form.Input id="choose" name="i_like" required pattern="banana|cherry" />
      </Form.Field>
      <Form.Field label='Would you prefer a red or blue?'>
        <Form.Input id="choose" name="i_like" />
      </Form.Field>

      <Flex alignItems={'center'} mb={3}>
        <Form.Check label="Hey, 'check' me out " my={2} />
        <Image
          size='1rem'
          src='http://orig14.deviantart.net/c6aa/f/2014/303/5/d/awesome_face_by_zorogleb-d84ne3x.jpg'
        />
      </Flex>

      <Button type="submit">Submit</Button>
    </Form>
  </div>
))
.add('Form with Card', () => (
  <div>
    <Card>
      <MyCustomForm />
    </Card>
  </div>
))
