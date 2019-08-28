import React from 'react';
import { Heading, Text } from 'spectacle';

export default function Introduction() {
  return (
    <>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        from zero to something...
      </Text>
    </>
  );
}
