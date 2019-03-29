import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { Blockie, Box, Heading, Text, Card, OutlineButton } from 'rimble-ui'

storiesOf('Blockie', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
  <Box textAlign={'left'}>
  <Box>
  <Blockie  opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />
  </Box>
  <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
  <code>{'<Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />'}</code>
  </Box>
  </Box>
))
.add(
  'Design guidelines',
  withDocs(Guidelines, () => (
<Box textAlign={'left'}>
<Box>
<Heading.h2>Design</Heading.h2>
<Text.p>Some best practice for using blockies</Text.p>
</Box>
<Box>
<Heading.h4>Don't use blockies as avatars</Heading.h4>
</Box>
<Box>
<Heading.h4>Don't make blockies circular</Heading.h4>
</Box><br />
<Box>
<Heading.h2>Research</Heading.h2>
<Text>We have some anecdotal evidence that blockies are not effectively helping users of Ethereum wallets or dApps as they are being implemented in many cases. We have chosen to include the pattern in Rimble because of its broad adoption and lack of alternatives. However, we believe further research, better usage guidelines, and potentially alternative patterns are needed.</Text>
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
