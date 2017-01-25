import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../pages/main/Main.js';
import Home from '../pages/home/Home.js';
import Tour from '../pages/tour/Tour.js';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="/tour" component={Tour} />
    </Route>

    <IndexRoute component={Home} />
  </Router>
)
