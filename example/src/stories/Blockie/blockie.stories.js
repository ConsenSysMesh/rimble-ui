import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Blockie,
  Avatar,
  Box,
  Heading,
  Text,
  Card,
  Pill,
  Flex,
} from 'rimble-ui';

storiesOf('Components/Blockie', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
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

          <CodeBlock textOnly>
            {`<Blockie
  opts={{
    seed: 'foo',
    color: '#dfe',
    bgcolor: '#a71',
    size: 15,
    scale: 3,
    spotcolor: '#000',
  }}
/>`}
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
          <Heading.h3>Design</Heading.h3>
          <Text.p>
            Some best practice for using <code>{'Blockie'}</code> in your
            product.
          </Text.p>
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
          <Heading.h3>Research</Heading.h3>
          <Text>
            We have some anecdotal evidence that blockies are not effectively
            helping users of Ethereum wallets or dApps as they are being
            implemented in many cases. We have chosen to include the pattern in
            Rimble because of its broad adoption and lack of alternatives.
            However, we believe further research, better usage guidelines, and
            potentially alternative patterns are needed.
          </Text>
        </Box>
        <ContributeBanner />
      </Box>
    ))
  );
