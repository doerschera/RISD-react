import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../pages/main/Main.js';
import Home from '../pages/home/Home.js';
import Tour from '../pages/tour/Tour.js';
import Academics from '../pages/studentLife/academics';
import Ask from '../pages/ask/Ask';
import Question from '../pages/ask/Question';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/tour" component={Tour} />
      <Route path="/experience" component={Academics} />
      <Route path="/ask" component={Ask} />
      <Route path="/question/:id" component={Question} />
    </Route>
  </Router>
)
