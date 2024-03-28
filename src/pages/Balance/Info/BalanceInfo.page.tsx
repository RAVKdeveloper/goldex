import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { SidebarWidget } from '../../../widgets/Sidebar/Sidebar.widget'
import { BalancesActionsFeatures } from '../../../features'
import { TitlePage, Balances, AddingModalEntity } from '../../../entities'

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
    </>
  )
}
