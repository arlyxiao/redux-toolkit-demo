import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'store/slices/counter/counterSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
