import { CREATE, REMOVE, SEARCH, SEARCH_RESET, UPDATE } from './types';
import vendorModel from '../../Models/vendor';

export const createAction = vendor => ({
  type: CREATE,
  data: { ...vendorModel, ...vendor }
});

export const removeAction = vendorCode => ({
  type: REMOVE,
  data: vendorCode
});

export const searchAction = searchTerms => {
  return dispatch => {
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
        data: items
      });
    }, 1000);
  };
};

export const searchResetAction = () => ({
  type: SEARCH_RESET,
  data: []
});

export const updateAction = vendor => ({
  type: UPDATE,
  data: { ...vendorModel, ...vendor }
});
