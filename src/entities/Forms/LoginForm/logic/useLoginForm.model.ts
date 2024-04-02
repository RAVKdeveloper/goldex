import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { useLoginMutation } from '@/shared/service/hooks'
import { Body_login } from '@/shared/service/client'

import { AppRoutes } from '@/app/routes/app.routes'

import type { useLoginFormType } from '../assets/useLoginForm.type'

import { useSchemaLoginValidate } from './useSchemaLoginValideate.model'

export const useLoginForm = (): useLoginFormType => {
  const schema = useSchemaLoginValidate()
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<Body_login>({
    mode: 'all',
    resolver: yupResolver<Body_login>(schema),
  })
  const [isOpenPass, setIsOpenPass] = useState<boolean>(false)
  const { mutate } = useLoginMutation()
  const navigate = useNavigate()

  const fetchLogin = (data: Body_login) => {
    try {
      mutate({ requestBody: data })
      navigate(AppRoutes.balanceInfo)
    } catch {
      alert('Error')
    }
  }

  const submit: SubmitHandler<Body_login> = data => {
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
