import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './Documentation.md';

import { Pill, Box, Text, Heading } from 'rimble-ui';

storiesOf('Components/Pill', module)
  .addDecorator(withDocs(Documentation))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
      <Box>
        <Heading.h2>Pill examples</Heading.h2>
        <Text.p>Different ways to use the pill component</Text.p>
      </Box>
      <br />
      <Box>
        <Heading.h4>Unselected</Heading.h4>
      </Box>
      <Box>
        <Pill mr={'2'} mb={'3'}>
          {'Pending'}
        </Pill>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Pill>{"Pending"}</Pill>'}</code>
      </Box>
      <Box>
        <br />
        <Heading.h4>Selected</Heading.h4>
      </Box>
      <Box>
        <Pill selected={true} mr={'2'} mb={'3'}>
          {'Pending'}
        </Pill>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>{'<Pill selected={true}>{"Pending"}</Pill>'}</code>
      </Box>
      <br />
      <Box>
        <Heading.h4>Custom color</Heading.h4>
        <Pill color={'primary'} mr={'2'} mb={'3'}>
          {'Pending'}
        </Pill>
        <Pill color={'red'} mr={'2'} mb={'3'}>
          {'Failed'}
        </Pill>
        <Pill selected={true} color={'green'} mr={'2'} mb={'3'}>
          {'Confirmed'}
        </Pill>
      </Box>
      <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
        <code>
          {'<Pill color={"primary"} mr={"2"} mb={"3"}>{"Pending"}</Pill>'}
        </code>
        <br />
        <code>{'<Pill color={"red"} mr={"2"} mb={"3"}>{"Failed"}</Pill>'}</code>
        <br />
        <code>
          {
            '<Pill selected={true} color={"green"} mr={"2"} mb={"3"}>{"Confirmed"}</Pill>'
          }
        </code>
      </Box>
    </Box>
  ));
