import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export interface FormData {
  username: string
  password: string
}

type ErrorFields = {
  login: string | undefined
  password: string | undefined
}

export interface useLoginFormType {
  handleSubmit: UseFormHandleSubmit<FormData, undefined>
  isValid: boolean
  submit: SubmitHandler<FormData>
  errorFields: ErrorFields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormData, any>
  checkPassword: () => void
  isOpenPass: boolean
}
