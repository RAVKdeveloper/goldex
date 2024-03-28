import { ChangeEvent } from 'react'

export interface FormData {
  amount: string
  addres: string
}

export interface useAddingBalanceType {
  nextStep: () => void
  canselAdding: () => void
  isOkStepOne: boolean
  closeModal: () => void
  isOpenModal: boolean
  step: 1 | 2
  submit: () => void
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
  amount: string
}
