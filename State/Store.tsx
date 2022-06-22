import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { saveStateData } from './State'

import todoSlice from './Slice'

const store = configureStore({ reducer: todoSlice.reducer })

store.subscribe(() => {
  saveStateData(store.getState().data);
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store
