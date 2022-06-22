import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import initialState from "./State";
import { readAllListThunk, readOneItemThunk, readOneListThunk } from "./Thunks";

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodoListAction: (state, action: PayloadAction<string>) => {
      const listId = uuidv4();
      state.data[listId] = {
        id: listId,
        name: action.payload,
        list: []
      }
    },
    deleteTodoListAction: (state, action: PayloadAction<string>) => {
      const listId = action.payload;
      delete state.data[listId]
    },
    insertTodoItemAction: (state, action: PayloadAction<[listId: string, title: string]>) => {
      const listId = action.payload[0];
      const title = action.payload[1];
      state.data[listId].list.push({
        id: uuidv4(),
        listId: listId,
        title: title,
        completed: false
      })
    },
    removeTodoItemAction: (state, action: PayloadAction<[listId: string, itemId: string]>) => {
      const listId = action.payload[0];
      const itemId = action.payload[1];
      const newList = state.data[listId].list.filter(it => it.id !== itemId);
      state.data[listId].list = newList
    },
    toggleTodoDoneAction: (state, action: PayloadAction<[listId: string, itemId: string]>) => {
      const listId = action.payload[0];
      const itemId = action.payload[1];
      const index = state.data[listId].list.findIndex(it => it.id === itemId);
      state.data[listId].list[index].completed = !state.data[listId].list[index].completed;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(readAllListThunk.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(readAllListThunk.fulfilled, (state, action) => {
      state.status = 'idle'
      state.data = action.payload
    })
    .addCase(readOneListThunk.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(readOneListThunk.fulfilled, (state, action) => {
      state.status = 'idle'
      const item = action.payload
      if(item) {
        state.data[item.id] = item
      }
    })
    .addCase(readOneItemThunk.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(readOneItemThunk.fulfilled, (state, action) => {
      state.status = 'idle'
      const item = action.payload
      if(item) {
        const index = state.data[item.listId].list.findIndex(it => it.id === item.id)
        state.data[item.listId].list[index] = item
      }
    })
  },
})

export const { 
  createTodoListAction, 
  deleteTodoListAction, 
  insertTodoItemAction, 
  removeTodoItemAction, 
  toggleTodoDoneAction 
} = todoSlice.actions

export default todoSlice
