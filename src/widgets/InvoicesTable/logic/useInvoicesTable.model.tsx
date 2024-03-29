import { useEffect, useMemo, useState } from 'react'

import { CellTable, Status, Button } from 'goldex-ui-library'
import { UserInvoiceIcon, VisaIcon, InfoIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

// eslint-disable-next-line max-len
import { useMoreInfoModal } from '../../../entities/Modals/MoreInfoInvoices/logic/useMoreInfoModal.model'

import type { useInvoicesTableType } from '../assets/useInvoicesTable.type'

export const useInvoicesTable = (): useInvoicesTableType => {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const { openModal } = useMoreInfoModal()

  const data = useMemo(
    () => [
      {
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
          <Button
            variant='secondary'
            icon={<InfoIcon width={20} height={20} />}
            onClick={() => openModal(1)}
          />
        ),
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
      {
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
        info: <Button variant='secondary' icon={<InfoIcon width={20} height={20} />} />,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  )

  useEffect(() => {
    if (data.length > 0) setIsEmpty(false)
    else setIsEmpty(true)
  }, [data])

  return {
    data,
    columns,
    isEmpty,
  } as useInvoicesTableType
}
