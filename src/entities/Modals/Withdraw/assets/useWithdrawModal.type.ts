import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export interface FormData {
  amount: number
  address: string
}

export interface useWithdrawModalType {
  isOpen: boolean
  closeModal: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormData, any>
  submit: SubmitHandler<FormData>
  handleSubmit: UseFormHandleSubmit<FormData, undefined>
  errorFields: { amount: string | undefined; address: string | undefined }
  isValid: boolean
}
