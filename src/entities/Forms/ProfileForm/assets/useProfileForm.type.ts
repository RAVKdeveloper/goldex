import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export interface FormData {
  username: string
}

export interface useProfileFormType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormData, any>
  handleSubmit: UseFormHandleSubmit<FormData, undefined>
  isValid: boolean
  submit: SubmitHandler<FormData>
  errorFields: { username: string | undefined }
}
