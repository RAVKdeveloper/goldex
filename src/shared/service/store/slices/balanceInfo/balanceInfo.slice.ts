/* eslint-disable import/named */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import type { IBalanceInfo } from './balanceInfo.type'

const initialState: IBalanceInfo = {
  isOpenAddingModal: false,
  isOpenWithdrawModal: false,
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
  },
})

export const balanceInfoSelector = (state: RootState) => state.balanceInfoSlice

export const { setIsOpenAddingModal, setIsOpenWithdrawModal } = balanceInfo.actions

export default balanceInfo.reducer
