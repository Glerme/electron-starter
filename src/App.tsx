import React from 'react';

import { Greetings } from './components/Greetings';

import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  );
};
