import React from 'react';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

const Greetings: React.FC = () => {
  return (
    <Container>
      <img src={Logo} />
      <h1>Electron Starter</h1>
      <p>An Electron boilerplate including TypeScript, React and ESLint.</p>
    </Container>
  );
};

export { Greetings };
