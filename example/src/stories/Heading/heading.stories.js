import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Heading,
  Box,
  Text,
  Flex,
  Card,
  Pill,
} from 'rimble-ui';

storiesOf('Components/Heading', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Heading examples</Heading.h3>
          <Text>
            Different ways to use the <code>{'Heading'}</code> component
          </Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>H1</Heading.h4>
          <Text.p>Use for page or screen titles</Text.p>
        </Box>

        <CodeBlock>
          <Heading.h1>Transactions</Heading.h1>
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H2</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of the <code>{'h1'}</code>{' '}
            heading
          </Text.p>
          <Heading.h2>Latest transactions</Heading.h2>
        </Box>
        <CodeBlock textOnly>
          {'<Heading.h2>Latest transaction</Heading.h2>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H3</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of an <code>{'h2'}</code>{' '}
            heading
          </Text.p>
          <Heading.h3>Successful transactions</Heading.h3>
        </Box>
        <CodeBlock textOnly>
          {'<Heading.h3>Successful transactions</Heading.h3>'}
        </CodeBlock>
        <br />
        <Box>
          <Heading.h4>H4</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h3'}</code>{' '}
            headings
          </Text.p>
          <Heading.h4>Transaction fees</Heading.h4>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h4>Transaction fees</Heading.h4>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H5</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h4'}</code>{' '}
            headings
          </Text.p>
          <Heading.h5>Transaction fees explained</Heading.h5>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h5>Transaction fees explained</Heading.h5>'}
        </CodeBlock>

        <br />
        <Box>
          <Heading.h4>H6</Heading.h4>
          <Text.p>
            Use for headings that are sub-sections of any <code>{'h5'}</code>{' '}
            headings
          </Text.p>
          <Heading.h6>How are transaction fees calculated?</Heading.h6>
        </Box>

        <CodeBlock textOnly>
          {'<Heading.h6>How are transaction fees calculated?</Heading.h6>'}
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
            Some best practices for using <code>{'Heading'}</code> in your
            product.
          </Text>
        </Box>
        <Box>
          <ul>
            <li>
              <Text>
                Only use one <code>{'h1'}</code> per page
              </Text>
            </li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>
              <Text>Headings should explain the content below</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>
              <Text>Keep headings short for scannability</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>
              <Text>
                Headings should appear at the top of the section of the
                interface they're introducing
              </Text>
            </li>
          </ul>
        </Box>
        <br />
        <br />
        <Box>
          <Heading.h3>Content</Heading.h3>
          <Text>
            Some best practices for writing <code>{'Heading'}</code> components.
          </Text>
        </Box>
        <Box>
          <Heading.h4>Avoid articles</Heading.h4>
          <Text>
            Don’t use articles (a, the, an) in headings. This will make your
            heading shorter and quicker to scan.
          </Text>
        </Box>
        <br />

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <Heading.h2>Add wallet</Heading.h2>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <Heading.h2>Add a wallet</Heading.h2>
          </Card>
        </Flex>

        <br />
        <Box>
          <Heading.h4>Keep copy short</Heading.h4>
          <Text>
            The shorter your copy, the more scannable it will be. Just ensure
            the user will understand what to expect from the content or action
            below the heading.
          </Text>
        </Box>
        <br />

        <Flex>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <Heading.h2>Transactions</Heading.h2>
          </Card>
          <Card mx={'auto'} my={3} px={4} width="400px">
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <Heading.h2>Your latest transactions</Heading.h2>
          </Card>
        </Flex>
        <ContributeBanner />
      </Box>
    ))
  );
