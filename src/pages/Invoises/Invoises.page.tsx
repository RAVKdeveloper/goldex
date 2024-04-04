import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { InvoicesTableWidget } from '../../widgets'
import { FilterAndSearchInvoicesFeature } from '../../features'
import { TitlePage, MoreInfoInvoicesEntity } from '../../entities'

import s from './style.module.css'

const InvoicesPage: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <main>
        <div className={s.container}>
          <TitlePage title={t('title.invoices')} subtitle={t('subtitle.invoices')} />
          <FilterAndSearchInvoicesFeature />
          <InvoicesTableWidget />
        </div>
      </main>
      <MoreInfoInvoicesEntity />
    </>
  )
}

export default InvoicesPage
