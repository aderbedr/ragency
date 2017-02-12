import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Login from './login/Login';
import PageNotFound from './pageNotFound/PageNotFound';
import Home from './home/Home';
import TopBanner from './topBanner/TopBanner'

import './index.css';

ReactDOM.render(
  <div>
    <TopBanner/>
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="*" component={PageNotFound}/>
    </Router>
  </div>,
  document.getElementById('root')
);
