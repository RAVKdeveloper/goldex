import { FC } from 'react'

import { Table, Pagination } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useInvoicesTable } from '../logic/useInvoicesTable.model'

import { NotFoundInvoicesEntity } from '../../../entities'

import s from '../assets/style.module.css'

export const InvoicesTableWidget: FC = () => {
  const { data, columns, isEmpty, nextPage, prevPage, page, totalPages } = useInvoicesTable()
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
              currentPage={page}
              pages={totalPages}
              btnNext={t('btn.next')}
              btnPrev={t('btn.prev')}
              textContent={t('paginationLabel', { current: page, total: totalPages })}
              next={nextPage}
              back={prevPage}
            />
          </div>
        </>
      ) : (
        <NotFoundInvoicesEntity />
      )}
    </section>
  )
}
