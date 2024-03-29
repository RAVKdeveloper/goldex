// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

import type { InvoicesSliceType } from './types/invoices.type'

const initialState: InvoicesSliceType = {
  isOpenInvoiceModal: false,
  idInvoice: null,
} as InvoicesSliceType

const invoices = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setOpenInvoiceModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenInvoiceModal = action.payload
    },
    setIdInvoice: (state, action: PayloadAction<number>) => {
      state.idInvoice = action.payload
    },
  },
})

export const invoicesSelector = (state: RootState) => state.invoicesSlice

export const { setOpenInvoiceModal, setIdInvoice } = invoices.actions

export default invoices.reducer
