import { FC } from 'react'

import { BalanceCard } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useBalanceInfoQuery } from '@/shared/service/hooks'

import s from '../assets/style.module.css'

export const Balances: FC = () => {
  const { t } = useTranslation()
  const { data } = useBalanceInfoQuery()

  return (
    <div data-testid='balances' className={s.root}>
      {data &&
        data.data &&
        data.data.length > 0 &&
        data.data.map(({ balance, type }) => (
          <div key={type} className={s.container}>
            {type === 'profit' ? (
              <BalanceCard currency={t('profit')} balance={balance} height='lg' />
            ) : (
              <BalanceCard currency={type} balance={balance} height='lg' />
            )}
          </div>
        ))}
    </div>
  )
}
