import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import * as contactsActions from './contacts-actions';

const contactsFilter = createReducer('', {
  [contactsActions.filterAction]: (state, { payload }) => payload,
});

const contactsItem = createReducer([], {
  [contactsActions.contactsItem]: (state, { payload }) => {
    return [{ ...payload, id: uuidv4() }, ...state];
  },
  [contactsActions.contactsDelete]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

export default combineReducers({
  filter: contactsFilter,
  item: contactsItem,
});
