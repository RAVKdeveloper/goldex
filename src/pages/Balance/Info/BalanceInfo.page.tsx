import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { TitlePage, Balances } from '../../../entities'

import s from './style.module.css'

export const BalanceInfoPage: FC = () => {
  const { t } = useTranslation()

  return (
    <main>
      <div className={s.container}>
        <TitlePage title={t('title.balanceInfo')} subtitle={t('subtitle.balanceInfo')} />
        <Balances />
      </div>
    </main>
  )
}
