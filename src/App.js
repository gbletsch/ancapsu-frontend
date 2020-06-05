import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'reactstrap'
import Top from './components/Top'
import MyFooter from './components/MyFooter'

import Routes from './Routes'

import './Global.css'

function App() {
  return (
    <Router>
      <Container fluid>
        <Top />
        <Routes />
        <MyFooter />
      </Container>
    </Router>
  );
}

export default App;
