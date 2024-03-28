import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppSelector, useAppDispatch } from '../../../../shared/service/store/hooks/hooks'

import {
  balanceInfoSelector,
  setIsOpenWithdrawModal,
} from '../../../../shared/service/store/slices/balanceInfo/balanceInfo.slice'

import { schema } from './yup.schema'

import type { useWithdrawModalType, FormData } from '../assets/useWithdrawModal.type'

export const useWithdrawModal = (): useWithdrawModalType => {
  const { isOpenWithdrawModal } = useAppSelector(balanceInfoSelector)
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver<FormData>(schema),
  })

  const closeModal = () => dispatch(setIsOpenWithdrawModal(false))

  const submit: SubmitHandler<FormData> = data => {
    confirm(JSON.stringify(data))
  }

  const errorFields = {
    amount: errors.amount?.message,
    address: errors.address?.message,
  }

  return {
    isOpen: isOpenWithdrawModal,
    closeModal,
    control,
    submit,
    handleSubmit,
    errorFields,
    isValid,
  }
}
