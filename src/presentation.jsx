// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Slide } from 'spectacle';

// Import theme
import createTheme from 'spectacle-theme-nova';
import CodeSlide from 'spectacle-code-slide';
import Prism from 'prismjs';

import Introduction from './introduction';
import History from './history';
import About from './about';
import HowTo from './howto';
import Install from './intall';
import 'spectacle-theme-nova/syntax/prism.nova.css';
import VirtualDOM from './virtualDom';

// Require CSS
require('normalize.css');

Prism.highlightAll();

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide', 'fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']}>
          <Introduction />
        </Slide>
        <Slide transition={['fade']}>
          <History />
        </Slide>
        <Slide transition={['fade']}>
          <About />
        </Slide>
        <Slide transition={['fade']}>
          <VirtualDOM />
        </Slide>
        <Slide transition={['fade']}>
          <HowTo />
        </Slide>
        <Slide transition={['fade']}>
          <Install />
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('./code.example')}
          ranges={[{ loc: [3, 15], title: 'Componente' }]}
        />
      </Deck>
    );
  }
}
