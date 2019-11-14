import React from 'react';
import { Heading } from 'rimble-ui';

export default {
  title: 'Heading',
};

export const heading = () => (
  <>
    <Heading as={'h1'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h2'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h3'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h4'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h5'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h6'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading>The quick brown fox jumps over the lazy dog</Heading>
  </>
);
