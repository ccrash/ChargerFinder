import { configureStore } from '@reduxjs/toolkit'
import chargerReducer from './chargerSlice'

export const store = configureStore({
  reducer: {
    charger: chargerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
