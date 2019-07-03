import React from 'react';
import { storiesOf } from '@storybook/react';

import { withDocs } from 'storybook-readme';
// import CodeBlock from '../../components/CodeBlock';
// import ContributeBanner from '../../components/ContributeBanner';
import Documentation from './docs.md';
// import Guidelines from './guide.md';

import {
  Select,
  Field,
} from 'rimble-ui';

const options = [
  { value: 'ETH', label: 'Ether' },
  { value: 'BTC', label: 'Bitcoin' },
  { value: 'GNO', label: 'Gnosis' },
  { value: 'GNT', label: 'Golem' },
  { value: 'REP', label: 'Augur' }
]

storiesOf('Components/Select/', module)
  .addParameters({
    readme: {
      // Show readme before story
      content: Documentation,
    },
  })
  .add('with options array', () => (
    <Field label="Choose your currency">
      <Select options={options} required />
    </Field>
  ))
  .add('with children', () => (
    <Field label="Please choose one pet:">
      <Select name="pets">
        <optgroup label="4-legged pets">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster" disabled>Hamster</option>
        </optgroup>
        <optgroup label="Flying pets">
          <option value="parrot">Parrot</option>
          <option value="macaw">Macaw</option>
          <option value="albatross">Albatross</option>
        </optgroup>
      </Select>
    </Field>
  ))


  // .add(
  //   'Design guidelines',
  //   withDocs(Guidelines, () => (
  //     <Box mx={3}>
  //       <Box>
  //         <Heading.h3>Design</Heading.h3>
  //         <Text>
  //           Some best practices for using <code>{'Select'}</code> in your
  //           product.
  //         </Text>
  //       </Box>
  //       <Box>
  //         <Heading.h4>It's better to show your options</Heading.h4>
  //         <Text>
  //           Only use the <code>{'Select'}</code> component when you have a lot
  //           of options that would clutter your interface. If you've only got a
  //           few options to choose from it might be better to show them to the
  //           user with a <code>{'Radio'}</code> component.
  //         </Text>
  //         <br />
  //       </Box>
  //       <Flex>
  //         <Card mx={'auto'} my={3} px={4} width="400px">
  //           <Pill mb={3} color={'green'}>
  //             {'Do'}
  //           </Pill>
  //           <br />
  //           <br />
  //           <Select
  //             items={[
  //               'ETH - Ether',
  //               'BTC - Bitcoin',
  //               'GNO - Gnosis',
  //               'GNT - Golem',
  //               'REP - Augur',
  //             ]}
  //           />
  //           <br />
  //           <br />
  //           <Radio label="ETH - Ether" my={2} required="false" />
  //           <Radio label="FIAT e.g. USD" my={2} required="false" />
  //         </Card>
  //         <Card mx={'auto'} my={3} px={4} width="400px">
  //           <Pill mb={3} color={'red'}>
  //             {"Don't"}
  //           </Pill>
  //           <br />
  //           <br />
  //           <Select items={['ETH - Ether', 'FIAT e.g. USD']} />
  //         </Card>
  //       </Flex>
  //
  //       <ContributeBanner />
  //     </Box>
  //   ))
  // );
