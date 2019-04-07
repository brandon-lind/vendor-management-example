import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './Store';
import App from './Components/App';
import VendorSearchResults from './Pages/Vendor/searchResult';
import VendorForm from './Pages/Vendor/form';

const history = createBrowserHistory();
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={VendorSearchResults} />
          <Route path="/vendor/add" component={VendorForm} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default Root;
