import { combineReducers } from '@reduxjs/toolkit'

import balanceInfoSlice from '../slices/balanceInfo/balanceInfo.slice'
import invoicesSlice from '../slices/invoices/invoices.slice'

export const rootReduser = combineReducers({
  balanceInfoSlice,
  invoicesSlice,
})
