import React from 'react';
import { Button, Box, Card, Text, Heading, Link } from 'rimble-ui';

const ContributeBanner = () => (
  <Box my={4}>
    <Text textAlign={'center'} mb={4}>
      {'(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧'}
    </Text>
    <Card color="white" bg="primary" border="none">
      <Heading.h2 color="white">Are we missing anything?</Heading.h2>
      <Text color="white" mb={4}>
        If you have any extra insight you'd like to add, please raise an issue
        in Github.
      </Text>
      <Button
        mainColor={'white'}
        contrastColor={'primary'}
        as={'a'}
        href="https://github.com/ConsenSys/rimble-ui/issues"
        title="GitHub Issues for Rimble UI"
        target="_blank"
      >
        Contribute
      </Button>
    </Card>
  </Box>
);

export default ContributeBanner;
