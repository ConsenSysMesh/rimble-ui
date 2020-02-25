import React from 'react';
import { Pill, Box } from 'rimble-ui';

export default {
  title: 'Pill'
};

export const pill = () => (
  <Pill>{'Pending'}</Pill>
);

export const withColors = () => (
  <>
    <Box p={3}>
      <Pill>{'Pending'}</Pill>
      <Pill color={'success'}>{'Pending'}</Pill>
      <Pill color={'warning'}>{'Pending'}</Pill>
      <Pill color={'danger'}>{'Pending'}</Pill>
      <Pill color={'info'}>{'Pending'}</Pill>
      <Pill color={'#4B0082'}>{'Pending'}</Pill>
    </Box>
    <Box bg={'black'} p={3}>
      <Pill>{'Pending'}</Pill>
      <Pill color={'success'}>{'Pending'}</Pill>
      <Pill color={'warning'}>{'Pending'}</Pill>
      <Pill color={'danger'}>{'Pending'}</Pill>
      <Pill color={'info'}>{'Pending'}</Pill>
      <Pill color={'#4B0082'}>{'Pending'}</Pill>
    </Box>
  </>
);
