import React from 'react';

import { Container } from 'reactstrap'
import Top from './components/Top'
import Main from './components/Main'
import MyFooter from './components/MyFooter'

import './Global.css'

function App() {
  return (
    <Container fluid>
      <Top />
      <Main />
      <MyFooter />
  </Container>
  );
}

export default App;
