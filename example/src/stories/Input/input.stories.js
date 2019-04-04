import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Flex,
  Card,
  Image,
  Button,
  Form,
  Box,
  Heading,
  Field,
  Text,
  Input,
  OutlineButton,
  Pill,
  Link,
} from 'rimble-ui';

storiesOf('Components/Form/Inputs', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Input examples</Heading.h2>
        <Text>
          Different ways to use the Input component. <b>Note</b>: these examples
          use the{' '}
          <Link
            href="https://consensys.github.io/rimble-ui/?path=/story/components-form-field--documentation"
            title="Rimble UI Form Field component"
          >
            Field
          </Link>{' '}
          component to render associated labels.
        </Text>
      </Box>
      <br />

      <Box>
        <Heading.h4>Placeholder</Heading.h4>
        <Text.p>
          Adds placeholder text to suggest the type of input expected.
        </Text.p>
        <Field label="Name your wallet">
          <Input
            type="text"
            placeholder="e.g. My hodl wallet"
            required="true"
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {
          '<Input type="text" required="true" placeholder="e.g. My hodl wallet" />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Disabled input</Heading.h4>
        <Field label="Name your wallet">
          <Input
            type="text"
            placeholder="e.g. My hodl wallet"
            required="true"
            disabled
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {
          '<Input type="text" placeholder="e.g. My hodl wallet" required="true" disabled />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Optional input</Heading.h4>
        <Text.p>Renders (Optional) next to the label.</Text.p>
        <Field label="Name your wallet">
          <Input type="text" placeholder="e.g. My hodl wallet" />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {'<Input type="text" placeholder="e.g. My hodl wallet" />'}
      </CodeBlock>

      <Box>
        <Heading.h4>Text input</Heading.h4>
        <Text.p>Brings up a standard keyboard.</Text.p>
        <Field label="Public address">
          <Form.Input
            type="text"
            required="true"
            placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
          />
        </Field>
      </Box>
      <CodeBlock textOnly>
        {
          '<Form.Input type="text" required="true" placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A" />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Email input</Heading.h4>
        <Text.p>Gives you an @ on your keyboard.</Text.p>
        <Field label="Email">
          <Form.Input
            type="email"
            name="email"
            id="email"
            required="true"
            placeholder="you@example.com"
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {
          '<Form.Input type="email" required="true" placeholder="you@example.com" />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Password input</Heading.h4>
        <Text.p>Masks any input.</Text.p>
        <Field label="Password">
          <Form.Input required="true" type="password" />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {'<Form.Input type="password" required="true" />'}
      </CodeBlock>

      <Box>
        <Heading.h4>Number input</Heading.h4>
        <Text.p>
          Opens the number page of your keyboard. Allows you to easily
          increase/decrease the value on desktop too.
        </Text.p>
        <Field label="Number">
          <Form.Input
            required="true"
            type="number"
            placeholder="e.g. 0.00001234"
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {'<Form.Input type="number" required="true" placeholder="e.g. 123" />'}
      </CodeBlock>

      <Box>
        <Heading.h4>Search input</Heading.h4>
        <Text.p>Allows you to quickly remove a search term.</Text.p>
        <Field label="Enter a search term">
          <Form.Input
            required="true"
            type="search"
            placeholder="e.g. Ethereum"
          />
        </Field>
      </Box>
      <CodeBlock textOnly>
        {
          '<Form.Input type="search" required="true" placeholder="e.g. Ethereum" />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>Telephone input</Heading.h4>
        <Text.p>Brings up the telephone keyboard.</Text.p>
        <Field label="Telephone">
          <Form.Input
            type="tel"
            required="true"
            placeholder="e.g. +445575242519"
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {
          '<Form.Input type="tel" required="true" placeholder="e.g. +445575242519" />'
        }
      </CodeBlock>

      <Box>
        <Heading.h4>URL input</Heading.h4>
        <Text.p>Brings up a url keyboard.</Text.p>
        <Field label="URL">
          <Form.Input
            type="url"
            required="true"
            placeholder="e.g. rimble.consensys.design"
          />
        </Field>
      </Box>

      <CodeBlock textOnly>
        {
          '<Form.Input type="url" required="true" placeholder="e.g. rimble.consensys.design" />'
        }
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
            Some best practices for using <code>{'Input'}</code> in your
            product.
          </Text>
        </Box>
        <Box>
          <Heading.h4>Don't use placeholders instead of labels</Heading.h4>
          <Text>
            Placeholders disappear as the user enters the field. This makes
            reviewing form entries difficult as you lose the explanation of the
            expected input.
          </Text>
        </Box>
        <br />
        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Field label="Public address">
              <Input
                type="text"
                width="100%"
                required="true"
                placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
              />
            </Field>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Field>
              <Input
                type="text"
                width="100%"
                required="true"
                placeholder="Public address"
              />
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
