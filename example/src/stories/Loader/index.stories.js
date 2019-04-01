import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Loader, Button, Box, Heading, Text, } from 'rimble-ui'

storiesOf('Loader', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Loader examples</Heading.h2>
        <Text>Different ways to use the loader component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Default loader</Heading.h4>
      <Loader mb={3} />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader />'}</code>
      </Box>
      <br />
      <Box>
      <Heading.h4>Loader with background</Heading.h4>
      <Loader color="white" bg="primary" mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader color="white" bg="primary" />'}</code>
      </Box>
      <br />

      <Box>
      <Heading.h4>Custom size</Heading.h4>
      <Loader size="40px" mb={3} />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader size="40px" />'}</code>
      </Box>
      <br />

      <Box>
      <Heading.h4>Custom colour</Heading.h4>
      <Loader size="80px" color="red" mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader size="80px" color="red" />'}</code>
      </Box>
      <br />

      <Box>
      <Heading.h4>Custom size and colour with background</Heading.h4>
      <Loader size="80px" color="white" bg="primary" mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader size="80px" color="white" bg="primary" />'}</code>
      </Box>
      <br />

      <Box>
      <Heading.h4>Custom background</Heading.h4>
      <Loader color="white" bg="grey" mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader color="white" bg="grey" />'}</code>
      </Box>
      <br />

      <Box>
      <Heading.h4>Black loader</Heading.h4>
      <Loader color="black" mb={3}/>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Loader color="black" />'}</code>
      </Box>



    </Box>
  ))
