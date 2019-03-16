import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './Components/App';
import VendorSearchResults from './Pages/Vendor/searchResult';
import VendorForm from './Pages/Vendor/form';

const history = createBrowserHistory();

const Root = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={VendorSearchResults} />
        <Route path="/vendor/add" component={VendorForm} />
      </Switch>
    </App>
  </Router>
);

export default Root;
