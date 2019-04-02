import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import {
  Avatar,
  Box,
  Heading,
  Text,
  Flex,
  OutlineButton,
  Card,
  Pill,
} from 'rimble-ui';

storiesOf('Components/Avatar', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Avatar examples</Heading.h2>
        <Text>Different ways to use the Avatar component</Text>
        <br />
      </Box>
      <Box>
        <Heading.h4>Standard avatar</Heading.h4>
        <Avatar mb={3} />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Avatar />'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Standard with image</Heading.h4>
        <Avatar
          mb={3}
          src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Avatar src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />'
          }
        </code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom size</Heading.h4>
        <Avatar
          mb={3}
          size="100px"
          src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Avatar size="100px" src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />'
          }
        </code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Large avatar</Heading.h4>
        <Avatar
          mb={3}
          size="large"
          src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Avatar size="large" src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />'
          }
        </code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Medium avatar</Heading.h4>
        <Avatar
          mb={3}
          size="medium"
          src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Avatar size="medium" src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />'
          }
        </code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Small avatar</Heading.h4>
        <Avatar
          mb={3}
          size="small"
          src="https://airswap-token-images.s3.amazonaws.com/DAI.png"
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Avatar size="small" src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />'
          }
        </code>
      </Box>
      <br />
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box>
        <Box mx={3} textAlign={'left'}>
          <Box>
            <Heading.h2>Design</Heading.h2>
            <Text.p>Some best practice for using avatars</Text.p>
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
          <br />
          <br />

          <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text>
          <br />
          <Card color="white" bg="primary">
            <Heading.h2 color="white">Are we missing anything?</Heading.h2>
            <Text color="white">
              If you have any extra insight you'd like to add, please raise an
              issue in Github.
            </Text>
            <br />
            <OutlineButton Large>Raise issue</OutlineButton>
            <br />
            <br />
          </Card>
          <br />
        </Box>
      </Box>
    ))
  );
