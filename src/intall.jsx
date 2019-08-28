import React from 'react';
import { Heading } from 'spectacle';
import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import Loading from 'react-loading';

const cursor = {
  show: false,
  blink: true,
  element: '_',
  hideWhenDone: false,
  hideWhenDoneDelay: 400
};

export default function Install() {
  return (
    <>
      <Heading size={2}>Instalación</Heading>
      <Terminal
        title="kodev@lima_frontend: ~(zsh)"
        output={[
          <Typist cursor={cursor}>npm install -g create-react-app</Typist>,
          <div style={{ color: '#33B969' }}>Successfull installed</div>,
          <Typist cursor={cursor}>create-react-app lima-frontend-app</Typist>,
          [
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Loading type="bars" color="#fff" height="30px" width="30px" />
              <span style={{ marginLeft: '1rem' }}>
                Installing depedencies...
              </span>
            </div>,
            <div style={{ color: '#33B969' }}>
              <span role="img" aria-label="storm icon">
                ⚡️
              </span>{' '}
              Dependencies installed!
            </div>
          ]
        ]}
      />
    </>
  );
}
