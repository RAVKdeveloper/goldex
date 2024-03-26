import { FC } from 'react'

import { BalanceCard } from 'goldex-ui-library'
import { USDTIcon, RubleIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const Balances: FC = () => {
  const { t } = useTranslation()

  return (
    <div data-testid='balances' className={s.root}>
      <div className={s.container}>
        <BalanceCard icon={<RubleIcon />} currency='RUB' balance={435545435} height='lg' />
      </div>
      <div className={s.container}>
        <BalanceCard icon={<USDTIcon />} currency='USDT TRC-20' balance={435545435} height='lg' />
      </div>
      <div className={s.container}>
        <BalanceCard currency={t('profit')} balance={435545435} height='lg' />
      </div>
    </div>
  )
}
