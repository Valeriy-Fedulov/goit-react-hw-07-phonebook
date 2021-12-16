import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  addContactSuccess: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
