import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Main from './components/Main'
import VideoPage from './components/VideoPage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/video/:id' component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes
