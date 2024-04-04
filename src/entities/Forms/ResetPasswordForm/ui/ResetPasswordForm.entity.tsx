import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { Controller } from 'react-hook-form'
import { EyeIcon, EyeOffIcon } from 'goldex-icon-library'
import { useResetPasswordForm } from '../logic/useResetPasswordForm.logic'
import s from '../assets/style.module.css'

export const ResetPasswordFormEntity: FC = () => {
  const { t } = useTranslation()
  const { control, handleSubmit, isValid, submit, errorFields, isOpenPass, checkPassword } =
    useResetPasswordForm()

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      <div className={s.header}>
        <h2 className={s.title}>{t('resetPasswordTitle')}</h2>
        <p className={s.supportingText}>{t('resetPasswordSupText')}</p>
      </div>
      <div className={s.content}>
        <Controller
          name='currentPassword'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                type={isOpenPass.password ? 'text' : 'password'}
                label={t('labels.currentPassword')}
                icon={
                  <div onClick={() => checkPassword('password')}>
                    {isOpenPass.password ? (
                      <EyeIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    ) : (
                      <EyeOffIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    )}
                  </div>
                }
                sizeType='lg'
                isError={!!errorFields.currentPassword?.message}
                helpText={errorFields.currentPassword?.message}
                {...field}
              />
            )
          }}
        />
        <Controller
          name='newPassword'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                type={isOpenPass.newPassword ? 'text' : 'password'}
                variant='input'
                label={t('labels.newPassword')}
                icon={
                  <div onClick={() => checkPassword('newPassword')}>
                    {isOpenPass.newPassword ? (
                      <EyeIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    ) : (
                      <EyeOffIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    )}
                  </div>
                }
                sizeType='lg'
                isError={!!errorFields.newPassword?.message}
                helpText={errorFields.newPassword?.message}
                {...field}
              />
            )
          }}
        />
        <Controller
          name='confirmCurrentPassword'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                type='password'
                variant='input'
                label={t('labels.confirmCurrentPassword')}
                sizeType='lg'
                isError={!!errorFields.confirmCurrentPassword?.message}
                helpText={errorFields.confirmCurrentPassword?.message}
                {...field}
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
