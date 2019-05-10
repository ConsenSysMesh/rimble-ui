import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

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
  Pill,
  Link,
} from 'rimble-ui';

storiesOf('Components/Inputs', module)
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design</Heading.h3>
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
        <ContributeBanner />
      </Box>
    ))
  );
