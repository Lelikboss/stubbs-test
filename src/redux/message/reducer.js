import { createReducer } from '@reduxjs/toolkit';
import actions from './action';
const initState = [
  { id: 'id-1', name: 'Alex', text: 'Hello'},
  { id: 'id-2', name: 'Alex', text: 'This is my test task' },
];
const items = createReducer(initState, {
    [actions.sendMessage]: (state, { payload }) => [...state, payload],
    [actions.deleteMesssage]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
  });

export default items