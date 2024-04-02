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
        data.data.map(({ balance, exchange, image }) => (
          <div key={exchange} className={s.container}>
            <BalanceCard
              icon={<img src={image} alt={exchange} />}
              currency={exchange}
              balance={balance}
              height='lg'
            />
          </div>
        ))}
      {/* Сервер пока не возвращает общий профит */}
      <div className={s.container}>
        <BalanceCard currency={t('profit')} balance={435545435} height='lg' />
      </div>
    </div>
  )
}
