import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { TitlePage, Balances, AddingModalEntity, WithdrawModalEntity } from '@/entities'
import { BalancesActionsFeatures } from '@/features'
import { SidebarWidget } from '@/widgets'

import s from './style.module.css'

export const BalanceInfoPage: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <SidebarWidget />
      <main>
        <div className={s.container}>
          <TitlePage title={t('title.balanceInfo')} subtitle={t('subtitle.balanceInfo')} />
          <BalancesActionsFeatures />
          <Balances />
        </div>
      </main>
      <AddingModalEntity />
      <WithdrawModalEntity />
    </>
  )
}
