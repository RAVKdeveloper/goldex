import { FC } from 'react'

import { Table, Pagination } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useInvoicesTable } from '../logic/useInvoicesTable.model'

import { NotFoundInvoicesEntity } from '../../../entities'

import s from '../assets/style.module.css'

export const InvoicesTableWidget: FC = () => {
  const { data, columns, isEmpty } = useInvoicesTable()
  const { t } = useTranslation()

  return (
    <section className={s.root} data-testid='table'>
      {!isEmpty ? (
        <>
          <div className={s.table}>
            <Table data={data} columns={columns} />
          </div>
          <div className={s.pagination}>
            <Pagination
              currentPage={5}
              pages={20}
              btnNext={t('btn.next')}
              btnPrev={t('btn.prev')}
              textContent='Page 5 of 20'
              next={() => confirm('next')}
              back={() => confirm('prev')}
            />
          </div>
        </>
      ) : (
        <NotFoundInvoicesEntity />
      )}
    </section>
  )
}
