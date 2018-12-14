import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Button } from 'rimble-ui'
import { OutlineButton } from 'rimble-ui'
import { TextButton } from 'rimble-ui'

import { Icon } from 'rimble-ui'

storiesOf('Button', module)
  .addDecorator(withDocs(MyREADME))
  .add('default', () => (
    <Button>Click Me</Button>
  ))
  .add('sizes', () => (
    <div>
      <Button size='small'>Small Button</Button>
      <br/>
      <Button size='medium'>Medium Button</Button>
      <br/>
      <Button size='large'>Large Button</Button>
      <br/>
      <Button fullWidth>Full-width Button</Button>
      <br/>
    </div>
  ))
  .add('Disabled', () => (
    <Button disabled >disabled Button</Button>
  ))
  .add('Icon', () => (
    <div>
      <Button icon="Check" mb="3">Click me!</Button>
      <br/>
      <Button icon="Check" iconpos="right"  mb="3">Click me!</Button>
      <br/>
      <Button icon='MoreHoriz' icononly  mb="3" />

    </div>
  ))
