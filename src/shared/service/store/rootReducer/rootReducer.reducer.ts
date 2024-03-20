import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../../api/api.instance'

export const rootReduser = combineReducers({
  [api.reducerPath]: api.reducer,
})
