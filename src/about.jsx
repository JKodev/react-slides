import React from 'react';
import { Heading, Text, Image } from 'spectacle';

export default function About() {
  return (
    <>
      <Heading size={2}>¿Qué es React?</Heading>
      <Text>
        Es una librería basada en componentes que utiliza la virtual DOM para
        optimizar el renderizado en el browser.
        <Image
          src="assets/images/react_components.webp"
          width="600px"
          style={{ backgroundColor: 'white', padding: '10px' }}
        />
      </Text>
    </>
  );
}
