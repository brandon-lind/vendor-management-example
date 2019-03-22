import { CREATE, REMOVE, SEARCH, SEARCH_RESET, UPDATE } from './types';

export const createAction = vndr => ({
  type: CREATE,
  data: { ...vndr }
});

export const removeAction = vndr => ({
  type: REMOVE,
  data: { ...vndr }
});

export const searchAction = () => ({
  type: SEARCH,
  data: []
});

export const searchResetAction = () => ({
  type: SEARCH_RESET,
  data: []
});

export const updateAction = vndr => ({
  type: UPDATE,
  data: { ...vndr }
});
