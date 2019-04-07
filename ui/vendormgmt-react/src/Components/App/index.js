import React from 'react';
import { Container } from 'reactstrap';
// eslint-disable-next-line import/no-named-as-default
import Masthead from '../Masthead';

const App = (props = {}) => {
  const { children } = props;

  return (
    <div className="app">
      <header>
        <Masthead />
      </header>
      <Container fluid>
        <div className="app-content">{children}</div>
      </Container>
      <footer className="fixed-bottom bg-light border-top p-1">
        <p className="text-center small mb-0">&copy; 2019 Brandon Lind</p>
      </footer>
    </div>
  );
};

export default App;
