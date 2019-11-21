import React from 'react';
import { Heading } from 'rimble-ui';

export default {
  title: 'Heading',
};

export const heading = () => (
  <Heading>
    The quick brown fox jumps over the lazy dog
  </Heading>
);

export const sizes = () => (
  <>
    <Heading fontSize={7}>XL - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h1'} fontSize={6}>H1 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h2'} fontSize={5}>H2 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h3'} fontSize={4}>H3 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h4'} fontSize={3}>H4 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h5'} fontSize={2}>H5 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h6'} fontSize={1}>H6 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading fontSize={0}>SX - Quick zephyrs blow, vexing daft Jim.</Heading>
  </>
);

export const withAsNotation = () => (
  <>
    <Heading as={'h1'}>H1 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h2'}>H2 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h3'}>H3 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h4'}>H4 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h5'}>H5 - Quick zephyrs blow, vexing daft Jim.</Heading>
    <Heading as={'h6'}>H6 - Quick zephyrs blow, vexing daft Jim.</Heading>
  </>
);

export const withDotNotation = () => (
  <>
    <Heading.h1>H1 - Quick zephyrs blow, vexing daft Jim.</Heading.h1>
    <Heading.h2>H2 - Quick zephyrs blow, vexing daft Jim.</Heading.h2>
    <Heading.h3>H3 - Quick zephyrs blow, vexing daft Jim.</Heading.h3>
    <Heading.h4>H4 - Quick zephyrs blow, vexing daft Jim.</Heading.h4>
    <Heading.h5>H5 - Quick zephyrs blow, vexing daft Jim.</Heading.h5>
    <Heading.h6>H6 - Quick zephyrs blow, vexing daft Jim.</Heading.h6>
  </>
);
