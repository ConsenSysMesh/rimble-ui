import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import documentation from './documentation.md';
import guidelines from './guidelines.md';

import {
  Blockie,
  Avatar,
  Box,
  Heading,
  Text,
  Card,
  OutlineButton,
  Pill,
  Flex,
  Image,
  Icon,
  Link,
} from 'rimble-ui';

storiesOf('Components/Blockie', module)
  .addDecorator(withDocs(documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Blockie
          opts={{
            seed: 'foo',
            color: '#dfe',
            bgcolor: '#a71',
            size: 15,
            scale: 3,
            spotcolor: '#000',
          }}
        />
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {
            '<Blockie opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}} />'
          }
        </code>
      </Box>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(guidelines, () => (
      <Box mx={3} textAlign={'left'}>
        <Box>
          <Heading.h2>Design</Heading.h2>
          <Text.p>Some best practice for using blockies</Text.p>
        </Box>
        <Box>
          <Heading.h4>Don't make blockies circular</Heading.h4>
          <Text>
            This obscures some of the blockie, making it more difficult for
            users to visually identify their Ethereum address. This means
            they're not a good idea to use in place of avatars.
          </Text>
        </Box>

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <Blockie
              opts={{
                seed: 'foo',
                color: '#dfe',
                bgcolor: '#a71',
                size: 15,
                scale: 3,
                spotcolor: '#000',
              }}
            />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <Avatar
              mb={3}
              size="medium"
              src="https://cdn-images-1.medium.com/max/1600/1*6E2bK3gagTUHroxhDsDP1w.jpeg"
            />
          </Card>
        </Flex>

        <br />
        <Box>
          <Heading.h2>Research</Heading.h2>
          <Text>
            We have some anecdotal evidence that blockies are not effectively
            helping users of Ethereum wallets or dApps as they are being
            implemented in many cases. We have chosen to include the pattern in
            Rimble because of its broad adoption and lack of alternatives.
            However, we believe further research, better usage guidelines, and
            potentially alternative patterns are needed.
          </Text>
        </Box>
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
          <Link
            href="https://github.com/ConsenSys/rimble-ui/issues"
            title="GitHub Issues for Rimble UI"
            target="_blank"
          >
            <OutlineButton Large>Raise issue</OutlineButton>
          </Link>
          <br />
          <br />
        </Card>
        <br />
      </Box>
    ))
  );
