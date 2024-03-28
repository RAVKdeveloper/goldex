import { ChangeEvent, useCallback, useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../../../shared/service/store/hooks/hooks'

import {
  balanceInfoSelector,
  setStepAdding,
  setIsOpenAddingModal,
  setAmount,
} from '../../../../shared/service/store/slices/balanceInfo/balanceInfo.slice'

import type { useAddingBalanceType, FormData } from '../assets/useAddingBalance.type'

export const useAddingBalance = (): useAddingBalanceType => {
  const { stepAdding, isOpenAddingModal, amount } = useAppSelector(balanceInfoSelector)
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    addres: '',
    amount: '',
  })

  const nextStep = () => {
    dispatch(setAmount(formData.amount))
    dispatch(setStepAdding(2))
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submit = () => {}

  const closeModal = useCallback(() => {
    dispatch(setIsOpenAddingModal(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const canselAdding = useCallback(() => {
    if (stepAdding === 2) return dispatch(setStepAdding(1))

    return closeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepAdding])

  const isOkStepOne = amount ? true : false

  return {
    nextStep,
    canselAdding,
    isOpenModal: isOpenAddingModal,
    step: stepAdding,
    isOkStepOne,
    closeModal,
    submit,
    changeInput,
    amount,
  }
}
