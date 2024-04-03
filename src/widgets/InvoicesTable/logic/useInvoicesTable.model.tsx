import { useEffect, useMemo, useState } from 'react'

import { CellTable, Status, Button } from 'goldex-ui-library'
import { UserInvoiceIcon, VisaIcon, InfoIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import { useMoreInfoModal } from '@/entities/Modals/MoreInfoInvoices/logic/useMoreInfoModal.model'
import { useInvoicesInfoQuery } from '@/shared/service/hooks'

import type { useInvoicesTableType } from '../assets/useInvoicesTable.type'

export const useInvoicesTable = (): useInvoicesTableType => {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const { openModal } = useMoreInfoModal()
  const [page, setPage] = useState<number>(1)
  const { data: invoicesData, isFetching } = useInvoicesInfoQuery({ page, size: 8 })

  const data = useMemo(() => {
    if (invoicesData && invoicesData.data && invoicesData.data.items) {
      return invoicesData?.data?.items.map(() => ({
        id: <CellTable text='#1011' />,
        bankClient: (
          <CellTable
            text='Мозолевский Даниил Сергеевич'
            icon={<UserInvoiceIcon width={22} height={22} />}
          />
        ),
        idClient: <CellTable text='#15' />,
        method: <CellTable text='Mastercard' icon={<VisaIcon />} />,
        date: <CellTable text='10 ноября 2023, 08:23' />,
        status: <CellTable text={<Status text='Wait' variant='wait' />} />,
        sum: <CellTable text='22 500 RUB' />,
        info: (
          <div className='flex items-center justify-center'>
            <Button
              variant='secondary'
              icon={<InfoIcon width={20} height={20} />}
              onClick={() => openModal(1)}
            />
          </div>
        ),
      }))
    } else return []
  }, [invoicesData])

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: t('table.header.bankClient'),
        accessor: 'bankClient',
      },
      {
        Header: t('table.header.idClient'),
        accessor: 'idClient',
      },
      {
        Header: t('table.header.method'),
        accessor: 'method',
      },
      {
        Header: t('table.header.date'),
        accessor: 'date',
      },
      {
        Header: t('table.header.status'),
        accessor: 'status',
      },
      {
        Header: t('table.header.sum'),
        accessor: 'sum',
      },
      {
        Header: '',
        accessor: 'info',
      },
    ],

    [language],
  )

  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => prev - 1)

  useEffect(() => {
    if (invoicesData && invoicesData.data && invoicesData.data.items.length > 0) setIsEmpty(false)
    else setIsEmpty(true)
  }, [invoicesData])

  return {
    data,
    columns,
    isEmpty,
    nextPage,
    prevPage,
    page,
    // Бэкенд ещё не возвращает кол-во страниц
    totalPages: 10,
    isFetching,
  } as const
}
