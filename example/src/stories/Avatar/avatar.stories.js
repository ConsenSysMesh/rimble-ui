import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Avatar,
  Box,
  Heading,
  Text,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'Avatar',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Avatar examples</Heading.h3>
          <Text>Different ways to use the Avatar component</Text>
          <br />
        </Box>

        <Box>
          <Heading.h4>Standard avatar</Heading.h4>

          <CodeBlock>
            <Avatar />
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Standard with image</Heading.h4>
          <CodeBlock>
            <Avatar src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Custom size</Heading.h4>
          <CodeBlock>
            <Avatar
              size="100px"
              src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
            />
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Large avatar</Heading.h4>
          <CodeBlock>
            <Avatar
              size="large"
              src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
            />
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Medium avatar</Heading.h4>
          <CodeBlock>
            <Avatar
              size="medium"
              src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
            />
          </CodeBlock>
        </Box>

        <br />
        <Box>
          <Heading.h4>Small avatar</Heading.h4>
          <CodeBlock>
            <Avatar
              size="small"
              src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
            />
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
