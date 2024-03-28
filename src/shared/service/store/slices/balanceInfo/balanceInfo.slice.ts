/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import type { IBalanceInfo } from './balanceInfo.type'

const initialState: IBalanceInfo = {
  isOpenAddingModal: false,
  isOpenWithdrawModal: false,
  stepAdding: 1,
  amount: '',
}

const balanceInfo = createSlice({
  name: 'balanceInfo',
  initialState,
  reducers: {
    setIsOpenAddingModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenAddingModal = action.payload
    },
    setIsOpenWithdrawModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenWithdrawModal = action.payload
    },
    setStepAdding: (state, action: PayloadAction<1 | 2>) => {
      state.stepAdding = action.payload
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload
    },
  },
})

export const balanceInfoSelector = (state: RootState) => state.balanceInfoSlice

export const { setIsOpenAddingModal, setIsOpenWithdrawModal, setStepAdding, setAmount } =
  balanceInfo.actions

export default balanceInfo.reducer
