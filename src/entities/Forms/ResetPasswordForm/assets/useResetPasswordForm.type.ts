import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

export interface FormData {
  currentPassword: string
  newPassword: string
  confirmCurrentPassword: string
}

export interface useResetPasswordType {
  control: Control<FormData>
  handleSubmit: UseFormHandleSubmit<FormData>
  isValid: boolean
  submit: SubmitHandler<FormData>
  errorFields: FieldErrors<FormData>
  checkPassword: (key: 'password' | 'newPassword') => void
  isOpenPass: { password: boolean; newPassword: boolean }
}
