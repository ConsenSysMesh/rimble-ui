import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { Heading, Box, Text, Flex, Card, OutlineButton, Pill} from 'rimble-ui'

storiesOf('Heading', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box ml={3} textAlign={'left'}>
    <Box>
      <Heading.h2>Heading examples</Heading.h2>
      <Text>Different ways to use the Heading component</Text>
      <br />
    </Box>
      <Box>
      <Heading.h4>H1</Heading.h4>
      <Text.p>Use for page or screen titles</Text.p>
      <Heading.h1>
        Transactions
      </Heading.h1>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h1>Transactions</Heading.h1>'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>H2</Heading.h4>
      <Text.p>Use for headings that are sub-sections of the <code>{'h1'}</code> heading</Text.p>
      <Heading.h2>
        Latest transactions
      </Heading.h2>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h2>Transaction fees</Heading.h2>'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>H3</Heading.h4>
      <Text.p>Use for headings that are sub-sections of an <code>{'h2'}</code> heading</Text.p>
      <Heading.h3>
        Successful transactions
      </Heading.h3>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h3>Todays transactions</Heading.h3>'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>H4</Heading.h4>
      <Text.p>Use for headings that are sub-sections of any <code>{'h3'}</code> headings</Text.p>
      <Heading.h4>
        Transaction fees
      </Heading.h4>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h4>This mornings transactions</Heading.h4>'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>H5</Heading.h4>
      <Text.p>Use for headings that are sub-sections of any <code>{'h4'}</code> headings</Text.p>
      <Heading.h5>
        Transaction fees explained
      </Heading.h5>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h5>Failed transactions (Today)</Heading.h5>'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>H6</Heading.h4>
      <Text.p>Use for headings that are sub-sections of any <code>{'h5'}</code> headings</Text.p>
      <Heading.h6>
        How are transaction fees calculated?
      </Heading.h6>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Heading.h6>Latest transactions</Heading.h6>'}</code>
      </Box>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
    <Box ml={3} textAlign={'left'}>
    <Box>
      <Heading.h2>Design</Heading.h2>
      <Text>Some best practices for using <code>{'Heading'}</code> in your product.</Text>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Only use one <code>{'h1'}</code> per page</Text></li></ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Headings should explain the content below</Text></li>
    </ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Keep headings short for scannability</Text></li></ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Headings should appear at the top of the section of the interface they're introducing</Text></li></ul>
    </Box>
    <br /><br />
      <Box>
        <Heading.h2>Content</Heading.h2>
        <Text>Some best practices for writing <code>{'Heading'}</code> components.</Text>
      </Box>
      <Box>
        <Heading.h4>Avoid articles</Heading.h4>
        <Text>Don’t use articles (a, the, an) in headings. This will make your heading shorter and quicker to scan.</Text>
      </Box>
      <br />

      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"green"}>{"Do"}</Pill>
          <Heading.h2>Add wallet</Heading.h2>
      </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill>
          <Heading.h2>Add a wallet</Heading.h2>
      </Card>
      </Flex>

      <br />
      <Box>
        <Heading.h4>Keep copy short</Heading.h4>
        <Text>The shorter your copy, the more scannable it will be. Just ensure the user will understand what to expect from the content or action below the heading.</Text>
      </Box>
      <br />

      <Flex>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"green"}>{"Do"}</Pill>
          <Heading.h2>Transactions</Heading.h2>
      </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill>
          <Heading.h2>Your latest transactions</Heading.h2>
      </Card>
      </Flex>
<br /><br />
      <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text><br />
      <Card color="white" bg="primary">
      <Heading.h2  color="white">Are we missing anything?</Heading.h2>
      <Text color="white">If you have any extra insight you'd like to add, please raise an issue in Github.</Text><br />
      <OutlineButton Large>Raise issue</OutlineButton><br /><br />
      </Card><br />
      </Box>
    ))
  );
