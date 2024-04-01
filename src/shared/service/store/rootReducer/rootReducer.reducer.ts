import { combineReducers } from '@reduxjs/toolkit'

import balanceInfoSlice from '../slices/balanceInfo/balanceInfo.slice'
import invoicesSlice from '../slices/invoices/invoices.slice'
import globalSlice from '../slices/global/global.slice'

export const rootReduser = combineReducers({
  balanceInfoSlice,
  invoicesSlice,
  globalSlice,
})
