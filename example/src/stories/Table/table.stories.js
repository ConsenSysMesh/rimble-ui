import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';
import ContributeBanner from '../../components/ContributeBanner';

import Documentation from './docs.md';

import {
  Table,
  Box,
  Heading,
  Text,
  Card,
  Pill,
  Link,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add(
    'Table',
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
