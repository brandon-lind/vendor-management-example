import { combineReducers } from 'redux';
import vendors from './Vendors/index';
import vendorSearch from './Vendors/search';

export default combineReducers({
  vendors,
  vendorSearch
});
