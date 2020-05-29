import React from 'react';

import { Container, Row } from 'reactstrap'
import Top from './components/Top'
import Main from './components/Main'
import './Global.css'

function App() {
  return (
    <Container fluid>
      <Top />
      <Main />
    <Row>Footer</Row>
  </Container>
  );
}

export default App;
