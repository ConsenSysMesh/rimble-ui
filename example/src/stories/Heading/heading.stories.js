import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Heading, Box, Text } from 'rimble-ui'

storiesOf('Heading', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box>
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
