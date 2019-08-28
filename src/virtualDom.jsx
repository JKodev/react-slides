import React from 'react';
import { Heading, Image } from 'spectacle';

export default function VirtualDOM() {
  return (
    <>
      <Heading size={2}>Virtual DOM</Heading>
      <Image
        src="assets/images/virtualdom.png"
        style={{ backgroundColor: 'white', padding: '10px' }}
      />
    </>
  );
}
