import { combineReducers } from 'redux';
import vendors from './Vendors/index';
import vendorSearch from './Vendors/search';

export default combineReducers({
  vendors: combineReducers({
    create: vendors,
    remove: vendors,
    update: vendors
  }),
  search: combineReducers({
    vendors: vendorSearch
  })
});
