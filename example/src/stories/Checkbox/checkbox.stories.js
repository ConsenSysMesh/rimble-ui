import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Checkbox,
  Box,
  Text,
  Field,
  Heading,
  Flex,
  Card,
  Pill,
  OutlineButton,
  Link,
} from 'rimble-ui';

storiesOf('Components/Form/Checkboxes', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <CodeBlock>
        <Checkbox label="Checkbox default" required="true" />
      </CodeBlock>

      <CodeBlock>
        <Checkbox checked label="Checkbox checked" required="true" />
      </CodeBlock>

      <CodeBlock>
        <Checkbox disabled label="Checkbox disabled" required="true" />
      </CodeBlock>

      <CodeBlock>
        <Checkbox
          disabled
          checked
          label="Checkbox checked disabled"
          required="true"
          my={2}
        />
      </CodeBlock>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3} textAlign={'left'}>
        <Box>
          <Heading.h2>Design</Heading.h2>
          <Text>
            Some best practices for using <code>{'Checkbox'}</code> in your
            product.
          </Text>
        </Box>

        <Box>
          <Heading.h4>Always use with a label</Heading.h4>
          <Text>
            Your users will need instruction on what to select. Don't just
            provide them with their choices.
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
            <Field label="Choose any currencies you'd like to track">
              <Checkbox label="Ether (ETH)" required="true" my={2} />
              <Checkbox label="Bitcoin (BTC)" required="true" my={2} />
              <Checkbox label="Ethereum Classic (ETC)" required="true" my={2} />
              <Checkbox label="Litecoin (LTC)" required="true" my={2} />
            </Field>
          </Card>

          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Checkbox label="Ether (ETH)" required="true" my={2} />
            <Checkbox label="Bitcoin (BTC)" required="true" my={2} />
            <Checkbox label="Ethereum Classic (ETC)" required="true" my={2} />
            <Checkbox label="Litecoin (LTC)" required="true" my={2} />
          </Card>
        </Flex>
        <br />

        <Box>
          <Heading.h4>
            Only use when users can make multiple selections
          </Heading.h4>
          <Text>
            Checkboxes are for times when your users can choose multiple options
            or no options. This means they're not suitable for binary decisions
            like Yes/No.
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
            <Field label="Choose any currencies you'd like to track">
              <Checkbox label="Ether (ETH)" required="true" my={2} />
              <Checkbox label="Bitcoin (BTC)" required="true" my={2} />
              <Checkbox label="Ethereum Classic (ETC)" required="true" my={2} />
              <Checkbox label="Litecoin (LTC)" required="true" my={2} />
            </Field>
          </Card>

          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Field label="Would you like alerts when the price changes?">
              <Checkbox label="Yes" required="true" my={2} />
              <Checkbox label="No" required="true" my={2} />
            </Field>
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
