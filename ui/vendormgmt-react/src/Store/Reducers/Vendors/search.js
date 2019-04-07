import { SEARCH, SEARCH_RESET, SEARCHING } from '../../Actions/Vendors/types';

const initialState = { isSearching: false, terms: '', results: [] };

const vendorSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
    case SEARCH_RESET:
      return action.payload;
    case SEARCHING:
      return { ...initialState, isSearching: true };
    default:
      return state;
  }
};

export default vendorSearch;
