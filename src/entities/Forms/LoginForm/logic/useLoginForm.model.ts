import { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import type { useLoginFormType, FormData } from '../assets/useLoginForm.type'

import { useSchemaLoginValidate } from './useSchemaLoginValideate.model'

export const useLoginForm = (): useLoginFormType => {
  const schema = useSchemaLoginValidate()
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver<FormData>(schema),
  })
  const [isOpenPass, setIsOpenPass] = useState<boolean>(false)

  const submit: SubmitHandler<FormData> = data => {
    confirm(JSON.stringify(data))
  }

  const checkPassword = () => setIsOpenPass(!isOpenPass)

  const errorFields = {
    login: errors?.login?.message,
    password: errors?.password?.message,
  }

  return {
    handleSubmit,
    isValid,
    submit,
    errorFields,
    control,
    checkPassword,
    isOpenPass,
  }
}
