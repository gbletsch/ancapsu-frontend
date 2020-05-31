import React from 'react';

import { Container } from 'reactstrap'
import Top from './components/Top'
// import Main from './components/Main'
import MyFooter from './components/MyFooter'

import Routes from './Routes'

import './Global.css'

function App() {
  return (
    <Container fluid>
      <Top />
      <Routes />
      <MyFooter />
  </Container>
  );
}

export default App;
