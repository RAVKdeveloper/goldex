import { FC } from 'react'

import { TextField, ModalActions } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useAddingBalance } from '../logic/useAddingBalance.model'

import s from '../assets/style.module.css'

export const StepOneAddingModal: FC = () => {
  const { t } = useTranslation()
  const { canselAdding, nextStep, changeInput } = useAddingBalance()

  return (
    <article className={s.stepOne}>
      <TextField
        label={t('labels.currensy')}
        variant='select'
        placeholder={t('placeholders.noselected')}
      />
      <TextField label={t('labels.amount')} name='amount' onChange={changeInput} />
      <ModalActions
        btnTextCancel={t('btn.cansel')}
        btnTextAction={t('btn.adding')}
        cbAction={nextStep}
        cbCansel={canselAdding}
      />
      <input hidden type='submit'></input>
    </article>
  )
}
