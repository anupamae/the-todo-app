import { createReducer } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import { createTodoListAction, deleteTodoListAction, insertTodoItemAction, removeTodoItemAction, toggleTodoDoneAction } from './Actions';
import { loadState } from './State';

export const todoReducer = createReducer(loadState(), (builder) => {
  builder
    .addCase(createTodoListAction, (state, action) => {
      const listId = uuidv4();
      state[listId] = {
        id: listId,
        name: action.payload,
        list: []
      }
    })
    .addCase(deleteTodoListAction, (state, action) => {
      const listId = action.payload;
      delete state[listId]
    })
    .addCase(insertTodoItemAction, (state, action) => {
      const listId = action.payload[0];
      const title = action.payload[1];
      state[listId].list.push({
        id: uuidv4(),
        title: title,
        completed: false
      });
    })
    .addCase(removeTodoItemAction, (state, action) => {
      const listId = action.payload[0];
      const itemId = action.payload[1];
      state[listId].list.filter(it => it.id !== itemId);
    })
    .addCase(toggleTodoDoneAction, (state, action) => {
      const listId = action.payload[0];
      const itemId = action.payload[1];
      const index = state[listId].list.findIndex(it => it.id === itemId);
      state[listId].list[index].completed = !state[listId].list[index].completed;
    })
})
