import { SEARCH, SEARCH_RESET } from '../../Actions/Vendors/types';

const initialState = [];

const vendorSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
    case SEARCH_RESET:
      return { ...action.data };
    default:
      return state;
  }
};

export default vendorSearch;
