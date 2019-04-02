import React from 'react'
import { storiesOf } from '@storybook/react'
import { doc } from 'storybook-readme';

import { Box, Heading, Text, Card, Pill, Flex, Image, Link, OutlineButton, Button, TextButton } from 'rimble-ui';
import MyREADME from './welcome.md';

import themingREADME from './theming-README.md';
import installREADME from './install-README.md';
import welcomeREADME from './welcome.md';

storiesOf('Getting started', module)
  .add('Welcome', () => (
<Box mx={3} textAlign={'left'}>
<Box>
<Heading.h1>Welcome to Rimble</Heading.h1>
<Heading.h3>Rimble is a set of adaptable components and design standards to help you get your decentralized application off the ground, fast.</Heading.h3>

<Text.p>Within you'll find documentation and design guidelines for most standard UI components plus some you'll need in a Web 3.0 world. Your tech stack and workflow are yours to decide. We impose as few constraints as possible.</Text.p>
</Box><br />
<Box>
<Heading.h3> dApp components </Heading.h3>
<Text.p>Components you'll find useful for blockchain-related actions</Text.p>
<Text>• <Link href="#">MetaMask Button</Link></Text>
<Text>• <Link href="#">UPortButton</Link></Text>
<Text>• <Link href="#">Public Address</Link></Text>
<Text>• <Link href="#">QR Code</Link></Text>
<Text>• <Link href="#">ToastMessage</Link></Text>
</Box><br />

<Box>
<Heading.h3> dApp patterns </Heading.h3>
<Text.p>Guides to creating smooth experiences in your dApp</Text.p>
<Text>• <Link href="#">Transaction states</Link></Text>
</Box><br />
<Box>

<Card color="white" bg="primary">
  <Heading>Contribute to Rimble</Heading>
  <Text.p color="white">Rimble is completely open source.
  [Add instructions for contributing]</Text.p>
  <OutlineButton>Contribute</OutlineButton>
</Card></Box><br />
<Box>
<Card>
  <Pill mb={3} color={"primary"}>{"NEW"}</Pill><br />
  <Heading>Latest changes</Heading>
  <Heading.h5>Sprint 16</Heading.h5>
  <Text>• Documentation refresh – new design guidelines added and layout updates</Text>
  <Text>• Table component added</Text>
</Card>
</Box>

</Box>


))
  .add('Installation', doc(installREADME))
  .add('Theming', doc(themingREADME))
