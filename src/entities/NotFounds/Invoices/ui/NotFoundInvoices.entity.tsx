import { FC } from 'react'

import { InvoicesIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const NotFoundInvoicesEntity: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={s.root} data-testid='notFound'>
      <div className={s.content}>
        <InvoicesIcon width={32} height={32} opacity={1} />
        <h3 className={s.title}>{t('notFounds.title')}</h3>
        <p className={s.text}>{t('notFounds.text')}</p>
      </div>
    </section>
  )
}
