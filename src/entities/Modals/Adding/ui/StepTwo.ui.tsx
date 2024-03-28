import React, { FC } from 'react'

import { ModalActions, TextField } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useAddingBalance } from '../logic/useAddingBalance.model'

import s from '../assets/style.module.css'

export const StepTwoAddingModal: FC = React.forwardRef(() => {
  const { t } = useTranslation()
  const { canselAdding, changeInput, submit, amount } = useAddingBalance()

  return (
    <article className={s.stepOne}>
      <TextField label={t('labels.address')} name='addres' onChange={changeInput} />
      <div className={s.column}>
        <p className={s.currency}>
          <span>{t('labels.currensy')}</span> 2
        </p>
        <p className={s.amount}>
          <span>{t('labels.amount')}</span> {Number(amount).toLocaleString('en')}
        </p>
      </div>
      <ModalActions
        btnTextCancel={t('btn.cansel')}
        btnTextAction={t('btn.iSent')}
        cbAction={submit}
        cbCansel={canselAdding}
      />
    </article>
  )
})
