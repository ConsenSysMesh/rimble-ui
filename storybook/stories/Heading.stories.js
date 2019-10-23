import React from 'react';
import { Heading, Text } from 'rimble-ui';

export default {
  title: 'Heading',
};

export const heading = () => (
  <>
    <Text>Defaul headings with `as` prop</Text>
    <Heading as={'h1'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h2'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h3'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h4'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h5'}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as={'h6'}>The quick brown fox jumps over the lazy dog</Heading>

    <Text mt={5}>Custom Headings</Text>
    <Heading>Heading with no `as` prop</Heading>
    <Heading fontSize={'100px'}>
      Heading with no `as` prop but with fontSize
    </Heading>
    <Heading fontSize={1}>
      Heading with no `as` prop but with fontSize and styled-system value
    </Heading>
    <Heading as={'h1'} fontSize={'75px'}>
      Heading with `as` prop and fontSize
    </Heading>
    <Heading as={'h1'} fontSize={1}>
      Heading with `as` prop and fontSize and styled-system value
    </Heading>
    <Heading.h1>Heading.h1 component with no fontSize</Heading.h1>
    <Heading.h1 fontSize={1}>
      Heading.h1 component with fontSize and styled-system value
    </Heading.h1>
    <Heading>Heading with no props</Heading>
  </>
);
