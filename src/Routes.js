import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import EachPage from './components/EachPage'
import Main from './components/Main'
import ListOfLittleCards from './components/ListOfLittleCards'
import VideoPage from './components/VideoPage'
import NewsPage from './components/NewsPage'
import VideoCategoryPage from './components/VideoCategoryPage'
import NewsCategoryPage from './components/NewsCategoryPage'

function Routes() {
  return (
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/target-list' exact component={ListOfLittleCards} />
        <Route path='/target-list/:id' component={EachPage} />
        <Route path='/video/video-category/:cat' exact component={VideoCategoryPage} />
        <Route path='/article/news-category/:cat' exact component={NewsCategoryPage} />
        <Route path='/video/:id' component={VideoPage} />
        <Route path='/article/:id' component={NewsPage} />
      </Switch>
  );
}

export default Routes
