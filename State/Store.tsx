import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Reducer'
import { saveState } from './State'

export const store = configureStore({ reducer: todoReducer })

store.subscribe(() => {
  saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

