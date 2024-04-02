import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { Body_login } from '@/shared/service/client'

type ErrorFields = {
  login: string | undefined
  password: string | undefined
}

export interface useLoginFormType {
  handleSubmit: UseFormHandleSubmit<Body_login, undefined>
  isValid: boolean
  submit: SubmitHandler<Body_login>
  errorFields: ErrorFields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<Body_login, any>
  checkPassword: () => void
  isOpenPass: boolean
}
