import React from 'react';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from './components/MenuBar';
import Events from './components/Events';

const App = () => {
  return (
    <Container>
      <MenuBar />
      <Events />
    </Container>
  );
};

export default App;
