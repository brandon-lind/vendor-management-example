import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import SearchResults from './Pages/VendorSearch';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={SearchResults} />
      </Switch>
    </App>
  </Router>
);

export default Root;
