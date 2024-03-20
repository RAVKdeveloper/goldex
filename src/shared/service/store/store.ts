import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from '../api/api.instance'

import { rootReduser } from './rootReducer/rootReducer.reducer'

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
