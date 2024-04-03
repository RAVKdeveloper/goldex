import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const ResetPasswordFormEntity: FC = () => {
  const { t } = useTranslation()

  return (
    <form className={s.form}>
      <div className={s.header}>
        <h2 className={s.title}>{t('resetPasswordTitle')}</h2>
        <p className={s.supportingText}>{t('resetPasswordSupText')}</p>
      </div>
      <div className={s.content}>
        <TextField label={t('labels.currentPassword')} sizeType='lg' />
        <TextField label={t('labels.newPassword')} sizeType='lg' />
        <TextField label={t('labels.confirmCurrentPassword')} sizeType='lg' />
      </div>
      <div className={s.button}>
        <Button variant='primary' size='es' disabled>
          {t('btn.save')}
        </Button>
      </div>
    </form>
  )
}
