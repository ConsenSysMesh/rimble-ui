import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import UsageDoc from './USAGE.md';
import GuidelinesDoc from './GUIDELINES.md';

import {
  Button,
  OutlineButton,
  TextButton,
  MetaMaskButton,
  Icon,
  Loader
} from 'rimble-ui'

storiesOf('Button', module)
  // .addDecorator(withDocs(UsageDoc))
  .add('Documentation', withDocs(UsageDoc, ()=> (
    <div>
      <Button>Click Me</Button>
    </div>
    <div>
      <Button size='small' mb={3}>Small Button</Button>
      <br/>
      <Button size='medium' mb={3}>Medium Button</Button>
      <br/>
      <Button size='large' mb={3}>Large Button</Button>
      <br/>
      <Button fullWidth>Full-width Button</Button>
    </div>
    <div>
      <Button disabled >disabled Button</Button>
    </div>
    <div>
      <Button icon="Check" mb="3">Click me!</Button>
      <br/>
      <Button icon="Check" iconpos="right"  mb="3">Click me!</Button>
      <br/>
      <Button icon='MoreHoriz' icononly mb="3" mr={2}/>
      <OutlineButton icon='MoreHoriz' icononly mb="3" mr={2}/>
      <TextButton icon='MoreHoriz' icononly  mb="3" />
    </div>
    <div>
      <Button>
        <Loader color='white'/>
      </Button>
    </div>
  ))
  .add('Guidelines',withDocs(GuidelinesDoc, () => (
    <div>
      <Button>Click Me</Button>
    </div>
   <div>
      <Button>Click Me</Button>
    </div>
    <div>
      <Button size='small' mb={3}>Small Button</Button>
      <br/>
      <Button size='medium' mb={3}>Medium Button</Button>
      <br/>
      <Button size='large' mb={3}>Large Button</Button>
      <br/>
      <Button fullWidth>Full-width Button</Button>
    </div>
    <div>
      <Button disabled >disabled Button</Button>
    </div>
    <div>
      <Button icon="Check" mb="3">Click me!</Button>
      <br/>
      <Button icon="Check" iconpos="right"  mb="3">Click me!</Button>
      <br/>
      <Button icon='MoreHoriz' icononly mb="3" mr={2}/>
      <OutlineButton icon='MoreHoriz' icononly mb="3" mr={2}/>
      <TextButton icon='MoreHoriz' icononly  mb="3" />
    </div>
    <div>
      <Button>
        <Loader color='white'/>
      </Button>
    </div>

  )))
