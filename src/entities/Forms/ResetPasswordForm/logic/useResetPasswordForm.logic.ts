import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useState } from 'react'
import type { useResetPasswordType, FormData } from '../assets/useResetPasswordForm.type'
import { useSchemaResetPasswordForm } from './useSchemaResetPasswordForm.schema'

export const useResetPasswordForm = (): useResetPasswordType => {
  const schema = useSchemaResetPasswordForm()

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({ mode: 'all', resolver: yupResolver<FormData>(schema) })

  const submit: SubmitHandler<FormData> = data => {
    data
  }

  const [isOpenPass, setIsOpenPass] = useState<{ password: boolean; newPassword: boolean }>({
    password: false,
    newPassword: false,
  })

  const checkPassword = (key: 'password' | 'newPassword') =>
    setIsOpenPass({ ...isOpenPass, [key]: !isOpenPass[key] })

  return { control, handleSubmit, isValid, submit, errorFields: errors, checkPassword, isOpenPass }
}
