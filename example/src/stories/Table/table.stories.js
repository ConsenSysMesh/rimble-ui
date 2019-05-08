import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Table,
  Box,
  Icon,
  Heading,
  Text,
  Card,
  
  Pill,
  Flex,
  Link,
} from 'rimble-ui';

storiesOf('Components/Table', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box mx={3}>
        <CodeBlock>
          <Table>
            <thead>
              <tr>
                <th>Transaction hash</th>
                <th>Value</th>
                <th>Recipient</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0xeb...cc0</td>
                <td>0.10 ETH</td>
                <td>0x4fe...581</td>
                <td>March 28 2019 08:47:17 AM +UTC</td>
              </tr>
              <tr>
                <td>0xsb...230</td>
                <td>0.11 ETH</td>
                <td>0x4gj...1e1</td>
                <td>March 28 2019 08:52:17 AM +UTC</td>
              </tr>
              <tr>
                <td>0xed...c40</td>
                <td>0.12 ETH</td>
                <td>0x3fd...781</td>
                <td>March 28 2019 08:55:17 AM +UTC</td>
              </tr>
            </tbody>
          </Table>
        </CodeBlock>
      </Box>
    ))
  )
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3}>
        <Box>
          <Heading.h3>Design and content</Heading.h3>
          <Text.p>
            Some best practice for using <code>{'Table'}</code>
          </Text.p>
          <br />
          <Heading.h4>Only use tables for data</Heading.h4>
          <Text.p>
            Data tables are more screen reader-friendly. Screen readers will
            identify the number of columns and rows, plus they'll read column
            and row headers. Layout tables are just read in source code order,
            which can create serious confusion for those using screen readers.
            For more explanation,{' '}
            <Link
              href="https://webaim.org/techniques/tables/"
              target="_blank"
              title="Creating Accessible Tables"
            >
              read about accessible tables
            </Link>
            .
          </Text.p>
          <br />
          <Heading.h4>Consider more responsive options</Heading.h4>
          <Text.p>
            Tables are hard to read and navigate on mobile devices, especially
            if there are lots of columns. Consider whether your information
            really needs to be presented in a table before committing to one.{' '}
          </Text.p>
          <br />
          <Heading.h4>Wrap don't truncate</Heading.h4>
        </Box>
        <Text.p>
          Truncation prevents users from comparing data accurately. For example,
          if all data in a particular column starts with the same word, they'll
          all appear the same unless wrapped.
        </Text.p>
        <br />
        <Box>
          <Heading.h4>More rows than columns is easier to read</Heading.h4>

          <Card mx={'auto'} my={3} px={4}>
            <Pill mb={3} color={'green'}>
              {'Do'}
            </Pill>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>row</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>row</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>row</td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card mx={'auto'} my={3} px={4}>
            <Pill mb={3} color={'red'}>
              {"Don't"}
            </Pill>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>r</td>
                  <td>o</td>
                  <td>w</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>r</td>
                  <td>o</td>
                  <td>w</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Box>
        <br />

        <Box>
          <Heading.h4>
            Headings should clearly summarise the data within each column
          </Heading.h4>
          <Text.p>
            Make sure your headings are clear and give the user enough
            information about what to expect in the data that follows.
          </Text.p>
        </Box>
        <Card mx={'auto'} my={3} px={4}>
          <Pill mb={3} color={'green'}>
            {'Do'}
          </Pill>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Value change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ETH</td>
                <td>Up 10%</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>Up 8%</td>
              </tr>
              <tr>
                <td>DAI</td>
                <td>Up 2%</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card mx={'auto'} my={3} px={4}>
          <Pill mb={3} color={'red'}>
            {"Don't"}
          </Pill>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>$</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ETH</td>
                <td>Up 10%</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>Up 8%</td>
              </tr>
              <tr>
                <td>DAI</td>
                <td>Up 2%</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <ContributeBanner />
      </Box>
    ))
  );
