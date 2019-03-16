import { combineReducers } from 'redux';
import searchVendors from './Vendors/search';

export default combineReducers({
  search: combineReducers({
    listings: searchVendors
  })
});
