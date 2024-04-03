import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { useProfileFormType, FormData } from '../assets/useProfileForm.type'
import { useSchemaProfileForm } from './useSchemaProfileForm.schema'

export const useProfileForm = (): useProfileFormType => {
  const schema = useSchemaProfileForm()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver<FormData>(schema),
  })

  const submit: SubmitHandler<FormData> = data => confirm(JSON.stringify(data))

  const errorFields = {
    username: errors?.username?.message,
  }

  return {
    control,
    handleSubmit,
    isValid,
    submit,
    errorFields,
  }
}
