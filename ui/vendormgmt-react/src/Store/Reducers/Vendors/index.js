import { CREATE, REMOVE, UPDATE } from '../../Actions/Vendors/types';

const initialState = [];

const vendors = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, ...action.payload };
    case REMOVE:
      return state.filter(vendor => vendor.code !== action.payload);
    case UPDATE:
      return state.map(vendor => {
        if (vendor.code === action.payload.code) {
          return action.payload.code;
        }

        return vendor;
      });
    default:
      return state;
  }
};

export default vendors;
