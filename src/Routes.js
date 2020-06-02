import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Main from './components/Main'
import VideoPage from './components/VideoPage'
import NewsPage from './components/NewsPage'
import VideoCategoryPage from './components/VideoCategoryPage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/video/video-category/:cat' exact component={VideoCategoryPage} />
        <Route path='/video/:id' component={VideoPage} />
        <Route path='/article/:id' component={NewsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes
