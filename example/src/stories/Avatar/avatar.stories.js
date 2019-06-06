import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';

import { withDocs } from 'storybook-readme';

import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Avatar,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Card,
  Pill,
  Link,
} from 'rimble-ui';

storiesOf('Components/Avatar', module)
  .add(
    'Documentation',
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
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Box>
            <Heading.h3>Design</Heading.h3>
            <Text.p>
              Some best practice for using <code>{'Avatar'}</code> in your
              product.
            </Text.p>
          </Box>

          <Heading.h4>Use with labels</Heading.h4>
          <Text>
            Labels will help solidify the relationship between the entity and
            the avatar. This will also make your product more accessible to
            those using assistive technologies
          </Text>
          <br />

          <Flex>
            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'green'}>
                {'Do'}
              </Pill>
              <Avatar
                size="medium"
                src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
              />
              <Text.span>1.98 DAI</Text.span>
            </Card>

            <Card mx={'auto'} my={3} px={4} width="400px">
              <Pill mb={3} color={'red'}>
                {"Don't"}
              </Pill>
              <Avatar
                mb={3}
                size="medium"
                src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
              />
            </Card>
          </Flex>

          <ContributeBanner />
        </Box>
      </Box>
    ))
  );



storiesOf('Component', module)
  .addDecorator(withInfo) // At your stories directly.
  .add('Avatar Example', () => (
    <Avatar src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />
  ));
