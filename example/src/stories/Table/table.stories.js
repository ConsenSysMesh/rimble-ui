import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { Table, Box, Icon, Heading, Text, Card, OutlineButton } from 'rimble-ui'

storiesOf('Table', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box textAlign={'left'}>
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
    </Box><br />
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
    <code>{'<Table>'}</code><br />
    <code>{'  <thead>'}</code><br />
    <code>{'    <tr>'}</code><br />
    <code>{'      <th>Transaction hash</th>'}</code><br />
    <code>{'      <th>Value</th>'}</code><br />
    <code>{'      <th>Recipient</th>'}</code><br />
    <code>{'      <td>March 28 2019 08:47:17 AM +UTC</td>'}</code><br />
    <code>{'    </tr>'}</code><br />
    <code>{'  </thead>'}</code><br />
    <code>{'  <tbody>'}</code><br />
    <code>{'    <tr>'}</code><br />
    <code>{'      <td>0xsb...230</td>'}</code><br />
    <code>{'      <td>0.11 ETH</td>'}</code><br />
    <code>{'      <td>0x4gj...1e1</td>>'}</code><br />
    <code>{'      <td>March 28 2019 08:52:17 AM +UTC</td>'}</code><br />
    <code>{'    </tr>'}</code><br />
    <code>{'    <tr>'}</code><br />
    <code>{'      <td>0xsb...230</td>'}</code><br />
    <code>{'      <td>0.11 ETH</td>'}</code><br />
    <code>{'      <td>0x4gj...1e1</td>'}</code><br />
    <code>{'      <td>March 28 2019 08:52:17 AM +UTC</td>'}</code><br />
    <code>{'    </tr>'}</code><br />
    <code>{'    <tr>'}</code><br />
    <code>{'      <td>0xed...c40</td>'}</code><br />
    <code>{'      <td>0.12 ETH</td>'}</code><br />
    <code>{'      <td>0x3fd...781</td>'}</code><br />
    <code>{'      <td>March 28 2019 08:55:17 AM +UTC</td>'}</code><br />
    <code>{'    </tr>'}</code><br />
    <code>{'  </tbody>'}</code><br />
    <code>{'</Table>'}</code>
    </Box>
    </Box>
  ))
    .add('Design guidelines', withDocs(Guidelines, () => (
      <Box ml={3} textAlign={'left'}>
        <Box>
        <Heading.h2>Design and content</Heading.h2>
        <Text.p>Some best practice for using Tables</Text.p>
        <Heading.h4>Don't use tables for layout</Heading.h4>
        <Heading.h4>Consider more responsive options</Heading.h4>
        <Heading.h4>Wrap don't truncate</Heading.h4>
        <Heading.h4>More rows than columns is easier to read</Heading.h4>
        <Heading.h4>Headings should clearly summarise the data within each column</Heading.h4>
        </Box>
        <br /><br />
        <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text><br />
        <Card color="white" bg="primary">
        <Heading.h2  color="white">Are we missing anything?</Heading.h2>
        <Text color="white">If you have any extra insight you'd like to add, please raise an issue in Github.</Text><br />
        <OutlineButton Large>Raise issue</OutlineButton><br /><br />
        </Card><br />
      </Box>
    ))
  );
