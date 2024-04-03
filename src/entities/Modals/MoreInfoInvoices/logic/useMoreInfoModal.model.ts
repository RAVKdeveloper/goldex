import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '../../../../shared/service/store/hooks/hooks'

import {
  invoicesSelector,
  setOpenInvoiceModal,
  setIdInvoice,
} from '../../../../shared/service/store/slices/invoices/invoices.slice'

import type { useMoreInfoModalType } from '../assets/useMoreInfoModal.type'

export const useMoreInfoModal = (): useMoreInfoModalType => {
  const { isOpenInvoiceModal } = useAppSelector(invoicesSelector)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const openModal = (id: number) => {
    dispatch(setIdInvoice(id))
    dispatch(setOpenInvoiceModal(true))
  }

  const closeModal = () => dispatch(setOpenInvoiceModal(false))

  const mockObj = [
    {
      key: t('invoice.holder'),
      value: 'Мозолевский Даниил Сергеевич',
    },
    {
      key: t('invoice.cardNumber'),
      value: '9356 4666 4138 1424',
    },
    {
      key: t('invoice.expired'),
      value: '30.09.23 16:47',
    },
    {
      key: t('invoice.currency'),
      value: 'Валюта',
    },
    {
      key: t('invoice.amount'),
      value: '1,240',
    },
    {
      key: t('invoice.status'),
      value: 'Оплачено',
    },
    {
      key: 'ID',
      value: '1011',
    },
    {
      key: t('invoice.idRemote'),
      value: '1011',
    },
    {
      key: t('invoice.idClient'),
      value: '1011',
    },
    {
      key: t('invoice.team'),
      value: 'testovich',
    },
    {
      key: t('invoice.created'),
      value: '30.09.23 16:47',
    },
    {
      key: t('invoice.updated'),
      value: '30.09.23 17:17',
    },
  ]

  return {
    openModal,
    closeModal,
    isOpenModal: isOpenInvoiceModal,
    info: mockObj,
  }
}
