// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface Iinitialstate {
  isAuth: boolean
}

const initialState: Iinitialstate = {
  isAuth: false,
}

const global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const globalSelector = (state: RootState) => state.globalSlice

export const { setAuth } = global.actions

export default global.reducer
