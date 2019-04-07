import {
  CREATE,
  REMOVE,
  SEARCH,
  SEARCH_RESET,
  SEARCHING,
  UPDATE
} from './types';
import vendorModel from '../../Models/vendor';

export const createAction = vendor => ({
  type: CREATE,
  payload: { ...vendorModel, ...vendor }
});

export const removeAction = vendorCode => ({
  type: REMOVE,
  payload: vendorCode
});

export const searchAction = searchTerms => {
  return dispatch => {
    dispatch({ type: SEARCHING });

    let items = [];
    const mocks = [
      {
        code: 'TEST1',
        name: 'Test Vendor 1',
        location: 'Test Location 1'
      },
      {
        code: 'TEST2',
        name: 'Test Vendor 2',
        location: 'Test Location 2'
      },
      {
        code: 'TEST3',
        name: 'Test Vendor 3',
        location: 'Test Location 3'
      },
      {
        code: 'TEST4',
        name: 'Test Vendor 4',
        location: 'Test Location 4'
      }
    ];

    setTimeout(() => {
      items = mocks.filter(mock => {
        return mock.name.toLowerCase().includes(searchTerms.toLowerCase());
      });

      dispatch({
        type: SEARCH,
        payload: { terms: searchTerms, results: items, isSearching: false }
      });
    }, 1000);
  };
};

export const searchResetAction = () => ({
  type: SEARCH_RESET,
  payload: { terms: '', results: [], isSearching: false }
});

export const updateAction = vendor => ({
  type: UPDATE,
  payload: { ...vendorModel, ...vendor }
});
