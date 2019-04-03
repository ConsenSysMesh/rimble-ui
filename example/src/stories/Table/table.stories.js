import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './docs.md';
import Guidelines from './guide.md';

import {
  Table,
  Box,
  Icon,
  Heading,
  Text,
  Card,
  OutlineButton,
  Pill,
  Flex,
  Link,
} from 'rimble-ui';

storiesOf('Components/Table', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
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
      </Box>
      <br />
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Table>'}</code>
        <br />
        <code>{'  <thead>'}</code>
        <br />
        <code>{'    <tr>'}</code>
        <br />
        <code>{'      <th>Transaction hash</th>'}</code>
        <br />
        <code>{'      <th>Value</th>'}</code>
        <br />
        <code>{'      <th>Recipient</th>'}</code>
        <br />
        <code>{'      <td>March 28 2019 08:47:17 AM +UTC</td>'}</code>
        <br />
        <code>{'    </tr>'}</code>
        <br />
        <code>{'  </thead>'}</code>
        <br />
        <code>{'  <tbody>'}</code>
        <br />
        <code>{'    <tr>'}</code>
        <br />
        <code>{'      <td>0xsb...230</td>'}</code>
        <br />
        <code>{'      <td>0.11 ETH</td>'}</code>
        <br />
        <code>{'      <td>0x4gj...1e1</td>>'}</code>
        <br />
        <code>{'      <td>March 28 2019 08:52:17 AM +UTC</td>'}</code>
        <br />
        <code>{'    </tr>'}</code>
        <br />
        <code>{'    <tr>'}</code>
        <br />
        <code>{'      <td>0xsb...230</td>'}</code>
        <br />
        <code>{'      <td>0.11 ETH</td>'}</code>
        <br />
        <code>{'      <td>0x4gj...1e1</td>'}</code>
        <br />
        <code>{'      <td>March 28 2019 08:52:17 AM +UTC</td>'}</code>
        <br />
        <code>{'    </tr>'}</code>
        <br />
        <code>{'    <tr>'}</code>
        <br />
        <code>{'      <td>0xed...c40</td>'}</code>
        <br />
        <code>{'      <td>0.12 ETH</td>'}</code>
        <br />
        <code>{'      <td>0x3fd...781</td>'}</code>
        <br />
        <code>{'      <td>March 28 2019 08:55:17 AM +UTC</td>'}</code>
        <br />
        <code>{'    </tr>'}</code>
        <br />
        <code>{'  </tbody>'}</code>
        <br />
        <code>{'</Table>'}</code>
      </Box>
    </Box>
  ))
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3} textAlign={'left'}>
        <Box>
          <Heading.h2>Design and content</Heading.h2>
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
            <Link href="https://webaim.org/techniques/tables/">
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
