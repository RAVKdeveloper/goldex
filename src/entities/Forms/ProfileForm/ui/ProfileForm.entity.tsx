import { FC } from 'react'
import { Button, TextField, UploadAvatar } from 'goldex-ui-library'

import { Controller } from 'react-hook-form'

import { useTranslation } from 'react-i18next'

import { useProfileForm } from '../logic/useProfileForm.logic'

import s from '../assets/style.module.css'

export const ProfileFormEntity: FC = () => {
  const { t } = useTranslation()
  const { control, handleSubmit, submit, isValid, errorFields } = useProfileForm()

  return (
    <form onSubmit={handleSubmit(submit)} className={s.form} data-testid='profileForm'>
      <div className={s.header}>
        <h2 className={s.title}>{t('profileTitle')}</h2>
        <p className={s.supportingText}>{t('profileSupText')}</p>
      </div>
      <div className={s.content}>
        <UploadAvatar size='lg' data-testid='uploadAvatar' />
        <Controller
          name='username'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                label={t('labels.username')}
                sizeType='lg'
                {...field}
                isError={errorFields.username ? true : false}
                helpText={errorFields.username}
                data-testid='input'
              />
            )
          }}
        />
      </div>
      <div className={s.button}>
        <Button variant='primary' size='es' disabled={!isValid}>
          {t('btn.save')}
        </Button>
      </div>
    </form>
  )
}
