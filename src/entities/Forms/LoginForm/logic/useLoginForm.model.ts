import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { useLoginMutation } from '@/shared/service/hooks'

import { AppRoutes } from '@/app/routes/app.routes'

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
  const { mutate, isSuccess } = useLoginMutation()
  const navigate = useNavigate()

  const fetchLogin = (data: FormData) => {
    try {
      mutate(data)
      if (isSuccess) navigate(AppRoutes.balanceInfo)
    } catch {
      alert('Error')
    }
  }

  const submit: SubmitHandler<FormData> = data => {
    fetchLogin(data)
  }

  const checkPassword = () => setIsOpenPass(!isOpenPass)

  const errorFields = {
    login: errors?.username?.message,
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
