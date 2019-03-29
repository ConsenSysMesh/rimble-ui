import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { Select, Field, Box, Heading, Text, Flex, Card, Pill, OutlineButton } from 'rimble-ui'

const items = [
  'Wallet #1',
  'Wallet #2',
  'Wallet #3',
]

storiesOf('Form/Select', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
  <Box>
  <Field label='Choose your wallet'>
    <Select items={items} required='false' />
  </Field>
  <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
  <code>{'<Select items={["Wallet #1","Wallet #2","Wallet #3",]} />'}</code>
  </Box>
  </Box>
))
.add(
    'Design guidelines',
    withDocs(Guidelines, () => (
    <Box ml={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Design</Heading.h2>
        <Text>Some best practices for using <code>{'Select'}</code> in your product.</Text>
      </Box>
      <Box>
        <Heading.h4>It's better to show your options</Heading.h4>
        <Text>Only use the <code>{'Select'}</code> component when you have a lot of options that would clutter your interface. If you've only got a few options to choose from it might be better to show them to the user with a <code>{'Radio'}</code> component.</Text>
      </Box>
      <Flex>
        <Box width={1/2}>
          <Heading.h6>Do</Heading.h6>
          <Select items={["Wallet #1","Wallet #2","Wallet #3", "Wallet #4", "Wallet #5", "Wallet #6", "Wallet #7", "Wallet #8", "Wallet #9", "Wallet #10", "Wallet #11", "Wallet #12", "Wallet #13", "Wallet #14",]} />
          </Box>
        <Box width={1/2}>
          <Heading.h6>Don't</Heading.h6>
          <Select items={["Wallet #1","Wallet #2",]} />
        </Box>
      </Flex>
      <br /><br />
        <Box>
          <Heading.h2>Content</Heading.h2>
          <Text>Some best practices for writing <code>{'Select'}</code> components.</Text>
        </Box>
        <Box>
          <Heading.h4>1</Heading.h4>
          <Text>Content guidance</Text>
        </Box><br /><br />
        <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text><br />
        <Card color="white" bg="primary">
        <Heading.h2  color="white">Are we missing anything?</Heading.h2>
        <Text color="white">If you have any extra insight you'd like to add, please raise an issue in Github.</Text><br />
        <OutlineButton Large>Raise issue</OutlineButton><br /><br />
        </Card><br />
        </Box>
  ))
);
