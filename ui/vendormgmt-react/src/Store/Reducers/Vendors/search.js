import {
  CREATE,
  REMOVE,
  SEARCH,
  SEARCH_RESET,
  UPDATE
} from '../../Actions/Vendors';

const initialState = {};

const search = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state;
    case REMOVE:
      return state;
    case SEARCH:
      return state;
    case SEARCH_RESET:
      return state;
    case UPDATE:
      return state;
    default:
      return state;
  }
};

export default search;
