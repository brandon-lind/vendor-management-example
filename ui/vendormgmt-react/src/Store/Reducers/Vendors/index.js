import { CREATE, REMOVE, UPDATE } from '../../Actions/Vendors/types';

const initialState = [];

const vendors = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, ...action.data };
    case REMOVE:
      return state.filter(vendor => vendor.code !== action.data);
    case UPDATE:
      return state.map(vendor => {
        if (vendor.code === action.data.code) {
          return action.data.code;
        }

        return vendor;
      });
    default:
      return state;
  }
};

export default vendors;
