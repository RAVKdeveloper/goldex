import { combineReducers } from '@reduxjs/toolkit'

import balanceInfoSlice from '../slices/balanceInfo/balanceInfo.slice'

export const rootReduser = combineReducers({
  balanceInfoSlice,
})
