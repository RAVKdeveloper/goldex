import { FC } from 'react'

import { Button } from 'goldex-ui-library'
import { PlusIcon, MinusIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import { useBalancesActions } from '../logic/useBalancesActions.model'

import s from '../assets/style.module.css'

export const BalancesActionsFeatures: FC = () => {
  const { t } = useTranslation()
  const { openAddingModal, openWithdrawModal } = useBalancesActions()

  return (
    <div className={s.root} data-testid='root'>
      <Button
        variant='secondary'
        icon={<PlusIcon width={20} height={20} opacity={1} />}
        size='sm'
        onClick={openAddingModal}
        data-testid='adding'
      >
        {t('btn.adding')}
      </Button>
      <Button
        variant='secondary'
        icon={<MinusIcon width={20} height={20} opacity={1} />}
        size='sm'
        onClick={openWithdrawModal}
        data-testid='withdraw'
      >
        {t('btn.withdraw')}
      </Button>
    </div>
  )
}
