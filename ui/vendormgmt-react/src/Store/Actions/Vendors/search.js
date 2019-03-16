import { CREATE, REMOVE, SEARCH, SEARCH_RESET, UPDATE } from './index';

export const createAction = () => ({
  type: CREATE
});

export const removeAction = () => ({
  type: REMOVE
});

export const searchAction = () => ({
  type: SEARCH
});

export const searchResetAction = () => ({
  type: SEARCH_RESET
});

export const updateAction = () => ({
  type: UPDATE
});
