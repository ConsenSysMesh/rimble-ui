import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Select,
  Field,
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Pill,
  OutlineButton,
  Radio,
  Link,
} from 'rimble-ui';

const items = [
  'ETH - Ether',
  'BTC - Bitcoin',
  'GNO - Gnosis',
  'GNT - Golem',
  'REP - Augur',
];

storiesOf('Components/Form/Select', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <CodeBlock>
          <Field label="Choose your currency">
            <Select items={items} required="false" />
          </Field>
        </CodeBlock>
      </Box>
    ))
  )
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design</Heading.h3>
          <Text>
            Some best practices for using <code>{'Select'}</code> in your
            product.
          </Text>
        </Box>
        <Box>
          <Heading.h4>It's better to show your options</Heading.h4>
          <Text>
            Only use the <code>{'Select'}</code> component when you have a lot
            of options that would clutter your interface. If you've only got a
            few options to choose from it might be better to show them to the
            user with a <code>{'Radio'}</code> component.
          </Text>
          <br />
        </Box>
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Select
              items={[
                'ETH - Ether',
                'BTC - Bitcoin',
                'GNO - Gnosis',
                'GNT - Golem',
                'REP - Augur',
              ]}
            />
            <br />
            <br />
            <Radio label="ETH - Ether" my={2} required="false" />
            <Radio label="FIAT e.g. USD" my={2} required="false" />
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Select items={['ETH - Ether', 'FIAT e.g. USD']} />
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
