import { FC } from 'react'
import { Button, TextField, UploadAvatar } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const ProfileFormEntity: FC = () => {
  const { t } = useTranslation()

  return (
    <form className={s.form}>
      <div className={s.header}>
        <h2 className={s.title}>{t('profileTitle')}</h2>
        <p className={s.supportingText}>{t('profileSupText')}</p>
      </div>
      <div className={s.content}>
        <UploadAvatar size='lg' />
        <TextField label={t('labels.username')} sizeType='lg' />
      </div>
      <div className={s.button}>
        <Button variant='primary' size='es' disabled>
          {t('btn.save')}
        </Button>
      </div>
    </form>
  )
}
